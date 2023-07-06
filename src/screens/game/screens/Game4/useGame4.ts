import {useState} from 'react';
import {showMessage} from 'src/components/MessageModal';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';
import {formatOpenPanna, getNumArray} from '../../list/getGameData';

const init = {
  open: '',
  close: '',
  points: '',
};

const useGame4 = ({route}: AuthorizedStackProps) => {
  const {key, length}: any = route?.params;
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
  nData?.forEach(el => {
    Object.keys(el).forEach(el2 => {
      numberData[el2] = el[el2];
    });
  });

  const numberArray = getNumArray(numberData, data);

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

  const openPanna = formatOpenPanna(data?.open);
  console.log('openPanna', openPanna);

  return {
    onChange,
    total,
    numberData,
    bidData,
    onAdd,
    data,
    onRemove,
    length,
  };
};

export default useGame4;
