import {useState} from 'react';
import {showMessage} from 'src/components/MessageModal';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';
import {getNumArray} from '../../list/getGameData';

const init = {
  group: '',
  points: '',
};

const useGame3 = ({route}: AuthorizedStackProps) => {
  const {key}: any = route?.params;
  const {numbers} = useAppSelector(state => state.numberReducer);
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

  const nData: any[] = numbers?.[key];
  const numberData = {};
  let numStr = '';
  nData.forEach(el => {
    Object.keys(el).forEach(el2 => {
      numberData[el2] = el[el2];
    });
  });

  const numberArray = getNumArray(numberData, data);

  numberArray &&
    numberArray.forEach(el => {
      numStr += `${el},`;
    });

  const onAdd = () => {
    if (!data?.group?.trim()?.length) {
      showMessage({
        modalType: 'Error',
        message: 'Add group jodi',
      });
    } else if (!data?.points?.trim()?.length) {
      showMessage({
        modalType: 'Error',
        message: 'Add points',
      });
    } else if (!numberArray?.length) {
      showMessage({
        modalType: 'Error',
        message: 'Patti not found',
      });
    } else {
      setBidData(prev => [...prev, data]);
      setData(init);
    }
  };

  let total = 0;
  bidData.forEach(el => {
    const nums = getNumArray(numberData, el);
    total = el.points * nums?.length;
  });

  return {
    onChange,
    total,
    numberData,
    bidData,
    onAdd,
    data,
    onRemove,
    numStr,
  };
};

export default useGame3;
