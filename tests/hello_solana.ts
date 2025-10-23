import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HelloSolana } from "../target/types/hello_solana";

describe("hello_solana", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.helloSolana as Program<HelloSolana>;

  it("Is initialized!", async () => {
    const tx = await program.methods.helloSolana().rpc();
    console.log("Your transaction signature", tx);
  });
});
