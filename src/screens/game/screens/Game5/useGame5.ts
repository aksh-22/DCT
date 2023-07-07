import {useCallback, useState} from 'react';
import {showMessage} from 'src/components/MessageModal';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {formatClosePanna, formatOpenPanna} from '../../list/getGameData';

const init = {
  value: '',
  points: '',
  type: false,
};

const useGame5 = ({}: AuthorizedStackProps) => {
  const [bidData, setBidData] = useState([]);
  const [data, setData] = useState(init);
  const [isSplit, setIsSplit] = useState(false);

  const onSplitPress = useCallback(() => {
    setIsSplit(prev => !prev);
    setData(init);
  }, []);

  const onChange = (type, val) => {
    let valueToSet = val;
    if (type === 'value') {
      if (!isSplit) {
        valueToSet = formatClosePanna(val);
      } else {
        valueToSet = formatOpenPanna(val);
      }
    }
    setData(prev => ({...prev, [type]: valueToSet, type: isSplit}));
  };

  const onRemove = index => {
    setBidData(prev => {
      prev.splice(index, 1);
      return [...prev];
    });
  };

  const onAdd = () => {
    if (data?.value?.trim()?.length !== 5) {
      showMessage({
        modalType: 'Error',
        message: 'Add digit-panna in proper format',
      });
    } else if (!data?.points?.trim()?.length) {
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
    isSplit,
    onSplitPress,
  };
};

export default useGame5;
