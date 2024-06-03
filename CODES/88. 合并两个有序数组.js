/* 

题目描述：
    - 给你两个按 <非递减顺序> 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
    - 请你 <合并> nums2 到 nums1 中，使合并后的数组同样按 <非递减顺序> 排列。
    - 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素
    表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
    - 提示：nums1.length == m + n；nums2.length == n

输入输出示例1
    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]

输入输出示例2
    输入：nums1 = [1], m = 1, nums2 = [], n = 0
    输出：[1]

输入输出示例3
    输入：nums1 = [0], m = 0, nums2 = [1], n = 1
    输出：[1]

*/

/* 

逆向双指针法：利用两个指针分别从两个有序数组数组的末尾开始遍历，通过比较和合并元素来实现有序合并
时间复杂度分析：该算法在最坏情况下需要遍历 nums1 和 nums2 一次，因此其时间复杂度为 O(m + n)。
空间复杂度分析：空间复杂度为 O(1)，因为除了输入的数组外，没有使用额外的空间。

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1; // 指向 nums1 有效部分的最后一个元素
    let p2 = n - 1; // 指向 nums2 的最后一个元素
    let p = m + n - 1; // 指向 nums2 的最后一个元素

    // 从后向前合并数组: 根据比较结果决定是从 nums1 还是 nums2 中取元素，并放入 nums1 的正确位置。
    while (p1 >= 0 && p2 >= 0) {
        nums1[p1] > nums2[p2] ? nums1[p--] = nums1[p1--] : nums1[p--] = nums2[p2--]
    }

    /* while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p--;
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p--;
            p2--;
        }
    } */

    // 处理 nums2 中剩余的元素: 如果 nums2 中还有剩余元素，拷贝到 nums1 前面
    while (p2 >= 0) {
        nums1[p--] = nums2[p2--];
    }

    /* while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    } */

    /* if (p2 >= 0) {
        residualElements = nums2.slice(0, p2 + 1);
        nums1.splice(0, p + 1, residualElements)
    } */
};