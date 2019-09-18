<?php

namespace Guessing;

class Guessing
{
    const MIN = 1;
    const MAX = 100;
    const INVALID = "invalid";
    const TOOLOW = "too low";
    const TOOHIGH = "too high";
    const CORRECT = "correct";

    public function __construct($seed = null)
    {
        if ($seed === null) {
            $seed = time();
        }

        srand($seed);
        $this->number = rand(self::MIN, self::MAX);
        $this->newGame = true;
    }

    public function getNumber(){
        return $this->number;
    }

    public function getNumGuesses(){
        return $this->numGuesses;
    }

    public function getGuess(){
        return $this->guess;
    }

    public function guess($num){
        $this->newGame = false;
        $this->guess = $num;
        if(($this->check() != self::INVALID) and ($this->check() != null)){
            $this->numGuesses += 1;
        }
    }

    public function check()
    {
        if ($this->newGame){
            return null;
        }
        else{
            if (($this->guess >= self::MIN) and ($this->guess <= self::MAX)) {
                if ($this->guess < $this->number) {
                    return self::TOOLOW;
                } else if ($this->guess > $this->number) {
                    return self::TOOHIGH;
                } else if ($this->guess == $this->number) {
                    return self::CORRECT;
                }
            } else {
                return self::INVALID;
            }
        }
    }

    private $guess;
    private $number;
    private $numGuesses;
    private $newGame;
}