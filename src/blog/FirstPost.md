---
title: 'Game Theory Part-1'
date:  '2021-03-18'
sinopsis: "What is game thoery? Why game theory?"


---

##1. What is game theory?

Game theroy basically is study of mathematical models that describe the the behavoir of logical decision makers.

##2. Why Game theory? 

Game Theory helps and enable to understand all the possible situtaion a person may encounter with different choice taken by them in a certain situtaion. Understanding the choices we have during as sitution helps us take a better logical decision.


**Simultaneous Game**:

For starters the one of the main games in game theory is simultaneous game, in which both the player make their move 
without the knowlege of what the other player has choosen. Sequential games usually the players have N moves and they 
are represented NxN matrix.

###To understand this better let us take the standard example of Prisoners Dilemma:

**Number of players**: 2

**Situtaion**: Police are introgating two possible criminals.

**Conditions**:

            1) If both of them confess to the crime both of them have equal jail time. (8 months).
            2) If one of them confess the one who confess get (0 months) in jail and the other has gets a jail term of 
                12 months.
            3) If none of them confess to the crime then both of them are sent to jail for 1 month.

**Solution**:

            In this case there are four possilbe cases.
            1. If A rats out then B has suffer in jail for 12 months.
            2. If A stays silent and then B rats out then A has to suffer in jail for 12 months.
            3. If B and A confess together for the crime then both of have to spend 8 months in jail.
            4. If none of them rat out each other then they only have to spend 1 month in jail.

            Taking the sum of number of months A and B  have to spend in jail in differnet cases:
            1) (0,12) 12 months
            2) (12,0) 12 months
            3) (8,8)  16 months
            4) (1,1)  2 months

            Case 3 is the best solution to the given situtation since the choice of the first player dominates the choice 
            taken by the second player. The First player has a better outcome when he/she confess to the crime as he/she
            will spend only 0 months in crime, but then if player A does not confess and Player B does then player A has
            to spend 12 months in jail. Which is not optimum and he/she can do better by confessing to the crine were he 
            only has to spend 8 months in jail if B confess to the crime. similary goes with B as well. 
            This is called as Strict Dominance 
