# Challenge Exercises

Now you've had an opportunity to get started using GitHub Copilot, we have a number of challenges for you to attempt. Remember the goal here is not to test your programming abilities but rather, see how you can use GitHub Copilot to help you complete these tasks. Even if you've never done these programming tasks before, you may be surprised how Copilot can help you be successful with these challenges.


### Challenge #2 - Adding Lizard and Spock to the game

- Improve the rock paper scissors game by adding Lizard and Spock. Refer to this chart for the updated game logic

    <img width="400" alt="Adding Lizard and Spock" src="../assets/Rock Paper Scissors Lizard Spock image.jpg">

- Use the same CLI output from Chellenge #1
- Commit and push your code to git


**Bonus!**

Extra Kudos for a terminal interface that provides a list of options with keyboard input.
Eg.
```
$ Choose your option:
1.  Rock
2.  Paper
3.  Scissors
4.  Lizard
5.  Spock
```


### Challenge #3 - Adding Unit Tests


- Implement unit tests using using any testing module of your choice.
- Capture a screenshot of the test result and coverage, then save it in the `/testResults` folder. Name the file as "testResult".
- Commit and push your code to git


**Bonus**
- Try to aim for over 80% coverage :)

### Challenge #4 - Adding a REST API

> 💡 Tips: You might want to create a new file or folder for this challenge to keep your original code from Challenges 1-2.

- Turn your program into a REST API
- Sending a POST request (or json payload) should return a 200 OK response with the result in the body

    Endpoint `POST /` JSON Response - 200

    Request
    ```
    {
        "playerChoice": "paper"
    }
    ```

    Response
    ```
    {
        "computerChoice": "rock"
        "playerChoice": "paper"
        "winner": "player"
        "wins": 1
        "losses": 0
        "gamesPlayed": 1
    }
    ```

- Should return a 400 BAD_REQUEST response error message in the body
    
    Endpoint `POST /` JSON Response - 400

    Request
    ```
    {
        "playerChoice": ""
    }
    ```

    Response
    ```
    {
        "message": "YOUR REASON HERE"
    }
    ```
- Commit and push your code to git

======================== END OF LEVEL 2 Challenge ========================

