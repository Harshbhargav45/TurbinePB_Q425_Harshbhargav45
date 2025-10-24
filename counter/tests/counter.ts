import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Counter } from "../target/types/counter";

describe("counter program test", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Counter as Program<Counter>;
  const counterKeypair = anchor.web3.Keypair.generate();

  it("Initializes the counter", async () => {
    await program.methods
      .initializeCounter()
      .accounts({
        payer: provider.wallet.publicKey,
        counter: counterKeypair.publicKey,
        system_program: anchor.web3.SystemProgram.programId,
      })
      .signers([counterKeypair])
      .rpc();

    console.log("Counter initialized!");
  });

  it("Increments the counter", async () => {
    await program.methods
      .increment()
      .accounts({
        counter: counterKeypair.publicKey,
      })
      .rpc();

    const account = await program.account.counter.fetch(
      counterKeypair.publicKey
    );
    console.log("Current count:", account.count.toString());
  });
});
