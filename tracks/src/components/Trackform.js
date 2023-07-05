import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as locationContext } from '../context/locationContext'
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { trackName, recording, locations },
        startRecording,
        stopRecording,
        addName
    } = useContext(locationContext);

    const [saveTrack] = useSaveTrack();

    return <>
        <Spacer >
            <Input
                value={trackName}
                placeholder='Enter Name here'
                onChangeText={addName}
            />
        </Spacer>
        <Spacer>
            {
                recording
                    ? <Button title="Stop" onPress={stopRecording} />
                    : <Button title="Start Recording" onPress={startRecording} />
            }
        </Spacer>
        <Spacer>
            {
                !recording && locations.length
                    ? <Button title='Save Recording' onPress={saveTrack} />
                    : null
            }
        </Spacer>
    </>
}

export default TrackForm;
