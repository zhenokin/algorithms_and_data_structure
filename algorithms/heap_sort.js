export function HeapSort(arrayBySort) {
    const sortedArray = [];

    const swapElements = (array, firstI, secondI) => {
        if (firstI === secondI) return;

        const data = array[firstI];
        array[firstI] = array[secondI];
        array[secondI] = data;
    };

    const pushDawn = (array, parentIndex) => {
        const lChildIndex = parentIndex * 2 + 1;
        const rChildIndex = parentIndex * 2 + 2;

        if (!array[lChildIndex]) return;

        if (!array[rChildIndex]) {
            if (array[lChildIndex] > array[parentIndex]) {
                swapElements(array, parentIndex, lChildIndex);
                pushDawn(array, lChildIndex);
            }
            return;
        }

        const bigestChild = array[lChildIndex] >= array[rChildIndex] ? lChildIndex : rChildIndex;
        if (array[parentIndex] >= array[bigestChild]) return;

        swapElements(array, parentIndex, bigestChild);
        pushDawn(array, bigestChild);
    };

    const buildHeap = (array) => {
        let parentIndex = Math.floor(array.length / 2) - 1;

        while (parentIndex >= 0) {
            pushDawn(array, parentIndex);
            --parentIndex;
        }

        return array;
    };

    const restoreHeap = (heap, index) => {
        const newIndex = pushDawn(heap, index);
        if (index === pushDawn(heap, newIndex)) return;
        restoreHeap(heap, newIndex);
    };

    const createSortedArray = (heap) => {
        if (!heap.length) return;

        swapElements(heap, 0, heap.length - 1);
        sortedArray.unshift(heap.pop());
        restoreHeap(heap, 0);
        createSortedArray(heap);
    };

    createSortedArray(buildHeap(arrayBySort));

    return sortedArray;
}
