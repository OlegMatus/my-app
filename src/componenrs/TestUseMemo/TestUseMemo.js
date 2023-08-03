import React, {useCallback, useMemo, useState} from 'react';
import TestUseCallback from "../TestUseCallback/TestUseCallback";

const TestUseMemo = ({data}) => {
    const [value, setValue] = useState(0);
    const [posts,setPosts] = useState([]);

    const heavyProcess = (data) => {
        console.log('Processing heavy...')
        for (let i = 100; i < 20000000; i++) {
            data += 1
        }
        return data
    };

    const memoriseResult = useMemo(() => heavyProcess(value), [value])
    // const memoriseResult = useMemo(() => {
    //     return heavyProcess(data)
    // },[data])
    const handleInputChange = () => {
        setValue(value +1);
    };

    const createPost = useCallback(() => {
        setPosts([...posts,'New Post'])
    }, [posts]);

    return (
        <div>
            <h2>TestUseMemo & UseCallback Component</h2>
            <input type="number" value={value} onChange={handleInputChange}/>
            <p>DATA:{data}</p>
            <p>Memorise Result:{memoriseResult}</p>
            <hr/>
            <TestUseCallback posts={posts} createPost={createPost}/>

        </div>
    );

};

export default TestUseMemo;