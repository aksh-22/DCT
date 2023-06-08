import {useState} from 'react';
import {HomeStackName} from 'src/constants/routeNames';
import {useRequest} from 'src/constants/useRequest';
import {gameDataType} from 'typings/game-type';

type Props = {
  navigation: any;
};

const useGameList = ({navigation}: Props) => {
  const [single, setSingle] = useState([]);
  const [jodi, setJodi] = useState([]);
  const [panel, setPanel] = useState([]);

  const onSuccess = fetchedData => {
    const newData: gameDataType[] = fetchedData.data.gametypes;
    const tempSingle = [];
    const tempJodi = [];
    const tempPanel = [];

    console.log('newData', JSON.stringify(newData, null, 2));

    newData.forEach(element => {
      if (element.name.includes('SUNGUM')) {
        tempSingle.push(element);
      } else if (element.name.includes('PANEL')) {
        tempPanel.push(element);
      } else if (element.name.includes('JODI')) {
        tempJodi.push(element);
      }
      setSingle(tempSingle);
      setJodi(tempJodi);
      setPanel(tempPanel);
    });
  };

  const {isLoading} = useRequest({
    endpoint: 'game-types',
    callApiByDefault: true,
    onSuccess,
  });

  const onGamePress = () => {
    navigation.navigate(HomeStackName.GAME1);
  };

  return {isLoading, panel, jodi, single, onGamePress};
};

export default useGameList;
