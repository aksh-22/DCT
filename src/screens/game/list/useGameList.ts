import {useState} from 'react';
import {useRequest} from 'src/constants/useRequest';
import {gameDataType} from 'typings/game-type';

type Props = {
  navigation: any;
};

const useGameList = ({navigation}: Props) => {
  const [single, setSingle] = useState([]);
  const [jodi, setJodi] = useState([]);
  const [panel, setPanel] = useState([]);
  const [sungum, setSungum] = useState([]);

  const onSuccess = fetchedData => {
    console.log('fetchedData', JSON.stringify(fetchedData, null, 2));
    const newData: gameDataType[] = fetchedData.data.gametypes;
    const tempSingle = [];
    const tempJodi = [];
    const tempPanel = [];
    const tempSungum = [];

    newData.forEach(element => {
      // console.log('element', JSON.stringify(element, null, 2));
      if (element.slug.includes('single_ankda')) {
        tempSingle.push(element);
      } else if (element.slug.includes('panel')) {
        tempPanel.push(element);
      } else if (element.slug.includes('jodi')) {
        tempJodi.push(element);
      } else if (element.slug.includes('jack')) {
        tempSungum.push(element);
      }
    });
    setSingle(tempSingle);
    setJodi(tempJodi);
    setPanel(tempPanel);
    setSungum(tempSungum);
  };

  const {isLoading} = useRequest({
    endpoint: 'game-types',
    callApiByDefault: true,
    onSuccess,
  });

  const onGamePress = route => {
    navigation.navigate(route);
  };

  return {isLoading, panel, jodi, single, onGamePress, sungum};
};

export default useGameList;
