<?php
// This allows us to use just Guessing
// instead of Guessing\Guessing
use Guessing\Guessing as Guessing;
use Guessing\GuessingView as GuessingView;

/** @file
 * @brief Unit tests for the class GuessingView
 * @cond
 */
class GuessingViewTest extends \PHPUnit\Framework\TestCase {
    const SEED = 1234;

    /**
     * Test ways you can get an INVALID return value from check.
     */
    public function test_present()
    {
        $guessing = new Guessing(self::SEED);
        $guessingView = new GuessingView($guessing);

        //no guesses yet
        $this->assertContains("Try to guess the number.", $guessingView->present());

        //invalid guess
        $guessing->guess(0);
        $this->assertContains("Your guess of 0 is invalid!", $guessingView->present());
        $guessing->guess(101);
        $this->assertContains("Your guess of 101 is invalid!", $guessingView->present());
        $guessing->guess("test");
        $this->assertContains("Your guess of test is invalid!", $guessingView->present());

        //too low
        $guessing->guess(22);
        $this->assertContains("After 1 guesses you are too low!", $guessingView->present());

        //correct
        $guessing->guess(23);
        $this->assertContains("After 2 guesses you are correct!", $guessingView->present());

        //too high
        $guessing->guess(24);
        $this->assertContains("After 3 guesses you are too high!", $guessingView->present());


    }
}