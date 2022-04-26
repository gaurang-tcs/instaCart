import React from 'react';
import Skeleton from './skeleton';

const SkeletonStore = () => {
    return (
        <div className='skeleton-store'>
            <Skeleton type='icon' />
            <Skeleton type='store-details' />
        </div>
    )
};

export default SkeletonStore;