// Function to find the year of the Denver Broncos' Super Bowl win
function superbowlWin(record) {
    // Use find() to locate the first game where the result is a win ('W')
    const winRecord = record.find(game => game.result === "W");
    
    // Return the year of the win if found, otherwise return undefined
    return winRecord ? winRecord.year : undefined;
  }
  
  // Sample game record data for the Denver Broncos
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "2012", result: "L" },
    { year: "2011", result: "N/A" },
    { year: "2006", result: "L" },
    { year: "2005", result: "L" },
    { year: "1998", result: "W" },
    { year: "1999", result: "L" },
  ];
  
  // Example usage of the superbowlWin function
  console.log(superbowlWin(record)); // Outputs: "2015"
  