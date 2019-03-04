class Solution:
  def __init__(self):
    self.islands = 0

  def numIslands(self, grid):
    for row in range(len(grid)):
      for col in range(len(grid[0])):
        spot = grid[row][col]
        if spot == 1:
          self.islands += 1
          self.exploreIsland(row, col, grid)
    return self.islands

  def exploreIsland(self, r, c, grid):
    if 0 <= r < len(grid) and 0 <= c < len(grid[0]) and grid[r][c] == 1:
        grid[r][c] = 0
        self.exploreIsland(r, c + 1, grid)
        self.exploreIsland(r, c - 1, grid)
        self.exploreIsland(r -1, c, grid)
        self.exploreIsland(r + 1, c, grid)

solution = Solution()

solution.numIslands([[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0], [0,0,0,1,1]])