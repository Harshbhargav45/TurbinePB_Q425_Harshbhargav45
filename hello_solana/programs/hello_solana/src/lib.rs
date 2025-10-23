use anchor_lang::prelude::*;

declare_id!("HeNKn77wxeJQLcQQ1fUbm19Mkxj8khuvYDUk7MrUNcfT");

#[program]
pub mod hello_solana {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        msg!("Hello,solana");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
