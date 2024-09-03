// components/Achievements.js
import leetcode_screenshot from "./images/leetcodeProfile.png";
import gfg_screenshot from "./images/gfgProfile.png";
import codechef_screenshot from "./images/CodeChefProfile.png";
const achievements = [
  {
    platform: 'LeetCode',
    streak: '270+ Day Streak',
    problemsSolved: '400+ Algorithms',
    description: 'Consistent practice has honed my problem-solving skills.',
    imageUrl: leetcode_screenshot, // Update path as needed
  },
  {
    platform: 'GeeksforGeeks',
    streak: '220+ Day Streak',
    problemsSolved: '250+ Problems',
    description: 'Focused on various data structures and algorithms.',
    imageUrl: gfg_screenshot, // Update path as needed
  },
  {
    platform: 'CodeChef',
    streak: '400+ Day Streak',
    problemsSolved: '700+ Questions',
    description: 'Developed a strong analytical approach through competitive programming.',
    imageUrl: codechef_screenshot ,// Update path as needed
  },
];

const Achievements = () => {
  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Achievements</h2>
      <div className="flex overflow-x-auto gap-6 p-4">
        {achievements.map((achieve, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80">
            <Image src={achieve.imageUrl} alt={`${achieve.platform} Screenshot`} width={320} height={180} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{achieve.platform}</h3>
              <p className="text-sm text-gray-600"><strong>{achieve.streak}</strong></p>
              <p className="text-sm text-gray-600"><strong>{achieve.problemsSolved}</strong></p>
              <p className="text-sm text-gray-700">{achieve.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
