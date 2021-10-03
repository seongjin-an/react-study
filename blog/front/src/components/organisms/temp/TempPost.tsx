import React, { useCallback } from 'react';
import { usePost } from '../../../libs/api/temp'

interface Props {
    postId: number;
    setPostId: React.Dispatch<React.SetStateAction<number>>;
}
export const TempPost = ({ postId, setPostId }: Props) => {
    const { status, data, error, isFetching } = usePost(postId);

    const renderByStatus = useCallback(() => {
        switch (status) {
            case 'loading':
                return <div>Loading...</div>;
            case 'error':
                if (error instanceof Error) {
                    return <span>Error: {error.message}</span>;
                }
                break;
            default:
                return (
                    <>
                        <h1>{data?.title}</h1>
                        <div>
                            <p>{data?.body}</p>
                        </div>
                        {isFetching && <div>Background Updating...</div> && console.log('zz')}
                    </>
                );
        }
    }, [status, isFetching]);

    return (
        <div>
            <a onClick={() => setPostId(-1)} href="#">
                Back
            </a>
            {renderByStatus()}
        </div>
    );
};