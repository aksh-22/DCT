/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useState} from 'react';
import {useRequest} from 'src/constants/useRequest';
import {gameDataType} from 'typings/game-type';

type Props = {
  navigation: any;
  route: any;
};

const useGameList = ({navigation, route}: Props) => {
  const params = route?.params;
  const [single, setSingle] = useState([]);
  const [jodi, setJodi] = useState([]);
  const [panel, setPanel] = useState([]);
  const [sungum, setSungum] = useState([]);

  const onSuccess = fetchedData => {
    const newData: gameDataType[] = fetchedData.data.gametypes;
    const tempSingle = [];
    const tempJodi = [];
    const tempPanel = [];
    const tempSungum = [];

    newData.forEach(element => {
      if (element[params?.type]) {
        if (element.slug.includes('single_ankda')) {
          tempSingle.push(element);
        } else if (element.slug.includes('panel')) {
          tempPanel.push(element);
        } else if (element.slug.includes('jodi')) {
          tempJodi.push(element);
        } else if (element.slug.includes('jack')) {
          tempSungum.push(element);
        }
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

  const onGamePress = useCallback(gameData => {
    navigation.navigate(gameData?.route, {...gameData, market: params});
  }, []);

  return {isLoading, panel, jodi, single, onGamePress, sungum};
};

export default useGameList;
