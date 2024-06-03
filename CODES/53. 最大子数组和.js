/* 

题目描述：
    - 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
    - <子数组> 是数组中的一个连续部分。
    - 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 <分治法> 求解。

输入输出示例1
    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6 (连续子数组 [4,-1,2,1] 的和最大，为 6 )

输入输出示例2
    输入：nums = [1]
    输出：1

输入输出示例3
    输入：nums = [5,4,-1,7,8]
    输出：23

*/

/* 
动态规划算法
    - 初始化两个变量：current_sum 表示当前子数组的和，max_sum 表示全局最大子数组的和。
    - 遍历数组 nums
        - 对于每个元素 num，将其加入到 current_sum 中。
        - 如果 current_sum 小于 num 本身，则更新 current_sum 为 num（即重新开始新的子数组）。
        - 更新 max_sum 为当前的最大值，即 max(max_sum, current_sum)。
    - 遍历结束后，max_sum 即为最大子数组的和。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    current_sum = max_sum = nums[0]; // current_sum 当前最大子数组和，max_sum 全局最大子数组和

    for (let i = 1; i < nums.length; i++) {
        current_sum = Math.max(nums[i], current_sum + nums[i]); // 如果 nums[i] > current_sum + nums[i]，则需要从 i 开始另起一个数组
        max_sum = Math.max(max_sum, current_sum);
    }
    return max_sum
};