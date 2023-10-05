import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdSportsCricket } from "react-icons/md";


const CricketScorecard = () => {
    const [batsmen, setBatsmen] = useState([
        { name: 'Player 1', runs: 50, balls: 40 },
        { name: 'Player 2', runs: 25, balls: 30 },
        // Add more batsmen as needed
      ]);
    
      const [bowlers, setBowlers] = useState([
        { name: 'Bowler 1', overs: '4.0', runs: 30, wickets: 2 },
        { name: 'Bowler 2', overs: '3.5', runs: 20, wickets: 1 },
        // Add more bowlers as needed
      ]);
    
      return (
        <div className="space-y-10">
          <h1 className="text-3xl font-bold mb-4">Cricket Scorecard</h1>

          <div className="flex gap-6 justify-center">
            <ReactCountryFlag
                countryCode="BD"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            /> <MdSportsCricket></MdSportsCricket>
            <ReactCountryFlag
                countryCode="AF"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            />
            </div>
    
          <table className="table-auto w-full mb-8">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200">Batsman</th>
                <th className="px-4 py-2 bg-gray-200">Runs</th>
                <th className="px-4 py-2 bg-gray-200">Balls</th>
              </tr>
            </thead>
            <tbody>
              {batsmen.map((batsman, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{batsman.name}</td>
                  <td className="px-4 py-2">{batsman.runs}</td>
                  <td className="px-4 py-2">{batsman.balls}</td>
                </tr>
              ))}
            </tbody>
          </table>
    
          <h2 className="text-2xl font-bold mb-4">Bowling Figures</h2>
    
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-2 py-2 bg-gray-200">Bowler</th>
                <th className="px-2 py-2 bg-gray-200">Overs</th>
                <th className="px-2 py-2 bg-gray-200">Runs</th>
                <th className="px-2 py-2 bg-gray-200">Wickets</th>
              </tr>
            </thead>
            <tbody>
              {bowlers.map((bowler, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{bowler.name}</td>
                  <td className="px-4 py-2">{bowler.overs}</td>
                  <td className="px-4 py-2">{bowler.runs}</td>
                  <td className="px-4 py-2">{bowler.wickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* Add more sections for additional information like extras, total score, etc. */}
        </div>
      );
};

export default CricketScorecard;