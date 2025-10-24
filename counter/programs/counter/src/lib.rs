use anchor_lang::prelude::*;

declare_id!("DiAfJVn5xkhtEVeuknWsbzq3heqqEGr9PJGPyhqq2HkX");



#[program]
pub mod counter {
    use super::*;

    pub fn initialize_counter(ctx: Context<InitializeCounter>) -> Result<()> {
        let counter_account = &mut ctx.accounts.counter;
        counter_account.count = 0;
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        let counter_account = &mut ctx.accounts.counter;
        counter_account.count += 1;
        Ok(())
    }
}


#[derive(Accounts)]
pub struct InitializeCounter<'info> {
    #[account(init, payer = payer, space = 8 + 8)]
    pub counter: Account<'info, Counter>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}


#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}

#[account]
pub struct Counter {
    pub count: i64,
}