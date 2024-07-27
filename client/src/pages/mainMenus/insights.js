import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Define the insights list
const insightsList = [
  {
    id: 1,
    image: require('../../assets/insights/thermography.png'),
    title: 'Infrared Thermography: Detect Leaks with Heat Vision',
    description: 'Use an Infrared Camera: Scan walls and pipes with an infrared camera.',
    link: '#'
  },
  {
    id: 2,
    image: require('../../assets/insights/dyetes.png'),
    title: 'Dye Test: A Simple Way to Check Toilets',
    description: 'Toilets are a common source of leaks. The dye test is an easy way to check:',
    link: '#'
  },
  {
    id: 3,
    image: require('../../assets/insights/smartwater.png'),
    title: 'Smart Water Meters',
    description: 'Advanced meters that track real-time water usage and send data to your smartphone.',
    link: '#'
  },
  {
    id:4,
    image: require('../../assets/insights/leakdetect.png'),
    title: 'Water Leak detection devices',
    description: 'Provides instant notifications when water is detected, allowing for quick response',
    link: '#'
  },
  // Add more insights here...
];

const Insights = () => {
  return (
    <div className="flex-1 p-4">
      <div className="flex-1 flex-col w-50 mt-3">
        <h1 className="regularHead">Explore the insights</h1>
        <p className="font-sansal text-primary text-base">
          Explore personal experiences and expert advice on managing and tracking water usage effectively.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {insightsList.map((insight) => (
          <div key={insight.id} className="insightBoxes">
            <Image src={insight.image} rounded className="imgBlogs" />
            <div className="flex-col">
              <h3 className="titleBlogs">{insight.title}</h3>
              <p className="contentBlogs">{insight.description}</p>
              <div className="flex justify-end">
                <Link to={insight.link} className="text-sm text-primary hover:text-blue-800 mt-5">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;