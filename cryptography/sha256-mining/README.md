# Case Study: SHA256-Mining
Small test to understand sha256-mining, the mining of cryptocurrency.

# Resources:
- https://www.reddit.com/r/Bitcoin/comments/18q2jx/eli5_bitcoin_mining_xpost_in_eli5/

# Overview
- SHA256-mining consists of hashing a value and checking the returned string to see if it has the required number of leading zeros. If it does, an acceptable block is found. If not, the hashed value will be adjusted slightly (incrementing a number), then rehashed and checked again.

# Items Learned
- To increase the difficulty of finding an accepted hash, require additional leading zeroes.
- Increasing zeroes will increase the difficulty by an order of magnitude.

# To Do
- Look into the reasoning behind increasing, or having at all, a difficulty setting.