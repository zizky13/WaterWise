import ProgressBar from 'react-bootstrap/ProgressBar';

const UsageBar = () => {
  const maxLiters = 120;
  const usedLiters = 95; // ganti sama data nyata
  const bar = Math.round((usedLiters / maxLiters) * 100);

  let percentageColor;

  if (bar >= 90) {
    percentageColor = 'text-alert';
  } else if (bar >= 80) {
    percentageColor = 'text-orange-500';
  } else if (bar >= 60) {
    percentageColor = 'text-yellow-500';
  } else if (bar >= 40) {
    percentageColor = 'text-green-500';
  } else {
    percentageColor = 'text-green-500';
  }

  return (
    <div className="flex-1 w-full h-40 p-5 border-solid border-primary border-1 rounded-md ">
      <div className='flex flex-row justify-between '>
        <p className='inlineSub'>Your water usage alone per day</p>
        <p className={`font-sansab justify-end text-lg ${percentageColor}`}> {`${bar}%`} </p>
      </div>
      <ProgressBar now={bar} />
      <div className="flex justify-end">
        <p className='font-sansab m-2 text-sm text-inactiveText'>{usedLiters}/{maxLiters}L</p>
      </div>
    </div>
  );
};

export default UsageBar;