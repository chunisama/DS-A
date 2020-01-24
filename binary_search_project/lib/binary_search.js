function binarySearch(array, target) {
    if (array.length === 0) return false;
    let middleIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, middleIdx);
    let rightHalf = array.slice(middleIdx + 1);
    
    if (target < array[middleIdx]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[middleIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target, lower = 0, higher = array.length - 1) {
    if (lower === higher) return -1;
    let middleIdx = Math.floor((lower + higher) / 2);
    
    if (target < array[middleIdx]) {
        return binarySearchIndex(array, target, lower, middleIdx);
    } else if (target > array[middleIdx]) {
        return binarySearchIndex(array, target, middleIdx + 1, higher);
    } else {
        return middleIdx;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};