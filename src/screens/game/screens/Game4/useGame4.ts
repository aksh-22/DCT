import {useState} from 'react';
import {showMessage} from 'src/components/MessageModal';
import {AuthorizedStackProps} from 'src/routes/types/navigation';

const init = {
  open: '',
  close: '',
  points: '',
};

const useGame4 = ({}: AuthorizedStackProps) => {
  const [bidData, setBidData] = useState([]);
  const [data, setData] = useState(init);

  const onChange = (type, val) => {
    setData(prev => ({...prev, [type]: val}));
  };

  const onRemove = index => {
    setBidData(prev => {
      prev.splice(index, 1);
      return [...prev];
    });
  };

  const onAdd = () => {
    if (!data?.open?.trim()?.length) {
      showMessage({
        modalType: 'Error',
        message: 'Add open panna',
      });
    } else if (!data?.open?.trim()?.length) {
      showMessage({
        modalType: 'Error',
        message: 'Add close panna',
      });
    } else if (!data?.close?.trim()?.length) {
      showMessage({
        modalType: 'Error',
        message: 'Add points',
      });
    } else {
      setBidData(prev => [...prev, data]);
      setData(init);
    }
  };

  let total = 0;
  bidData.forEach(el => {
    total = el.points;
  });

  return {
    onChange,
    total,
    bidData,
    onAdd,
    data,
    onRemove,
  };
};

export default useGame4;
