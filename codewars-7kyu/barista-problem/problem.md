# 7 Kyu - Barista Problem

Description

You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.

So you are the only barista today, you only have one coffee machine that can brew one coffee at a time. People start giving you their orders. Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.

Now you have a list: coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.

Task:

Given a list of the times you need to brew each coffee, print the minimum total waiting time and if you get it right, you will get that raise your boss promised you.

Note that:

    You can only brew one coffee at a time.

    Since you have one coffee machine, you have to wait for it to brew the current coffee before you can move on to the next one.

    Ignore the time you need to serve the coffee and the time you need to take the orders and write down the time you need for each one of them.

    If you have three customers with the times: [4,3,2] the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total: 9 minutes. The third customer, by the same logic is about to wait: 9minutes (for the first two customers)+2 more minutes(cleaning)+2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of: 26 minutes, but, note that, this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.

    The order in which you brew the coffee is totally up to you.

Examples:

Example 1:

Input:

coffee=[3,2,5,10,9]

Output:

85

Example 2:

Input:

coffee=[20,5]

Output:

32

Example 3:

Input:

coffee=[4,3,2]

Output:

22

Special Thanks to the great Discord community for helping with the creation of this kata and also to the programmers that helped a lot in the " discuss " section.

[Link to Problem](https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/train/javascript)