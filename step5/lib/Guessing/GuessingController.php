<?php


namespace Guessing;


class GuessingController
{
    public function __construct(Guessing $guessing, $post) {
        $this->guessing = $guessing;
        if(isset($post['clear'])) {
            $this->reset = true;
        }
        else if(isset($post['value'])) {
            $this->guess($post['value']);
        }
    }

    public function isReset(){
        return $this->reset;
    }

    private function guess($guess){
        $this->guessing->guess(strip_tags($guess));
    }

    private $guessing;
    private $reset = false;
}