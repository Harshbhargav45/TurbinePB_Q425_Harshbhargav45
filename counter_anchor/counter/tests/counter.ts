import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { CounterAnchor } from "../target/types/counter_anchor";

describe("Counter Program Test", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.CounterAnchor as Program<CounterAnchor>;

  const counter = anchor.web3.Keypair.generate();

  it("Initialize the counter", async () => {
    await program.methods
      .initializeCounter()
      .accounts({
        payer: provider.wallet.publicKey,
        counter: counter.publicKey,
      })
      .signers([counter])
      .rpc();

    console.log("✅ Counter account created!");
  });

  it("Increment the counter", async () => {
    await program.methods
      .increment()
      .accounts({
        counter: counter.publicKey,
      })
      .rpc();

    const counterAccount = await program.account.counter.fetch(
      counter.publicKey
    );
    console.log("🔢 Current counter value:", counterAccount.count.toString());
  });
});
