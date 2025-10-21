use std::cmp::Ordering;
use std::io;
use rand::Rng;

fn main(){
    println!("guess the number!");
    

     let secret_number = rand::thread_rng().gen_range(1..=100);
   
    println!("the secret number is: {secret_number}");
    
   
    println!("please input your guess.");


    let mut guess = String::new();

    io::stdin()
    .read_line(&mut guess)
    .expect("failed to read line");

    let guess: u32 = guess.trim().parse().expect("please type a number!");
    println!("you guessed:{guess}");


    match guess.cmp(&secret_number){
     Ordering::Less => println!("too small"),
     Ordering::Greater => println!("too big"),
     Ordering::Equal => println!("you win"),

    }
}