import directedGraphSmall from '../../../Data Structures/Graphs/Examples/directedGraphSmall';
import directedGraphLarge from '../../../Data Structures/Graphs/Examples/directedGraphLarge';
import undirectedGraphLarge from '../../../Data Structures/Graphs/Examples/undirectedGraphLarge';
import treeGraph from '../../../Data Structures/Graphs/Examples/treeGraph';
import makeSearch from './depthFirstSearch';

let array;
let visit;
let depthFirstSearch;

let array = [];
const visit = (node) => {
	array.push(node.data);
};
const depthFirstSearch = makeSearch(visit);

describe('Depth-First Search (DFS)', () => {
	it('Should search by depth first', () => {
		array = []
		depthFirstSearch(directedGraphSmall);
		expect(array).toEqual([0, 1, 3, 2, 4, 5]);

		array = [];
		depthFirstSearch(directedGraphLarge.node0);
		expect(array).toEqual([0, 1, 2, 32, 13, 12, 14, 15, 8, 9, 10, 11, 23, 22, 33, 21, 16, 20, 19, 18, 17, 3, 31, 30, 29, 24, 28, 27, 26, 25, 4, 5, 6, 7]);

		array = [];
		depthFirstSearch(undirectedGraphLarge.node0);
		expect(array).toEqual([0, 1, 2, 13, 8, 9, 10, 11, 12, 22, 16, 17, 18, 19, 20, 21, 25, 24, 26, 27, 28, 29, 30, 31, 3, 23, 33, 14, 15, 32, 4, 5, 6, 7]);

		array = [];
		depthFirstSearch(treeGraph.node0);
		expect(array).toEqual([0, 1, 7, 43, 259, 260, 261, 262, 263, 44, 265, 266, 267, 268, 269, 45, 271, 272, 273, 274, 275, 46, 277, 278, 279, 280, 281, 47, 283, 284, 285, 286, 287, 8, 49, 295, 296, 297, 298, 299, 50, 301, 302, 303, 304, 305, 51, 307, 308, 309, 310, 311, 52, 313, 314, 315, 316, 317, 53, 319, 320, 321, 322, 323, 9, 55, 331, 332, 333, 334, 335, 56, 337, 338, 339, 340, 341, 57, 343, 344, 345, 346, 347, 58, 349, 350, 351, 352, 353, 59, 355, 356, 357, 358, 359, 10, 61, 367, 368, 369, 370, 371, 62, 373, 374, 375, 376, 377, 63, 379, 380, 381, 382, 383, 64, 385, 386, 387, 388, 389, 65, 391, 392, 393, 394, 395, 11, 67, 403, 404, 405, 406, 407, 68, 409, 410, 411, 412, 413, 69, 415, 416, 417, 418, 419, 70, 421, 422, 423, 424, 425, 71, 427, 428, 429, 430, 431, 2, 13, 79, 475, 476, 477, 478, 479, 80, 481, 482, 483, 484, 485, 81, 487, 488, 489, 490, 491, 82, 493, 494, 495, 496, 497, 83, 499, 500, 501, 502, 503, 14, 85, 511, 512, 513, 514, 515, 86, 517, 518, 519, 520, 521, 87, 523, 524, 525, 526, 527, 88, 529, 530, 531, 532, 533, 89, 535, 536, 537, 538, 539, 15, 91, 547, 548, 549, 550, 551, 92, 553, 554, 555, 556, 557, 93, 559, 560, 561, 562, 563, 94, 565, 566, 567, 568, 569, 95, 571, 572, 573, 574, 575, 16, 97, 583, 584, 585, 586, 587, 98, 589, 590, 591, 592, 593, 99, 595, 596, 597, 598, 599, 100, 601, 602, 603, 604, 605, 101, 607, 608, 609, 610, 611, 17, 103, 619, 620, 621, 622, 623, 104, 625, 626, 627, 628, 629, 105, 631, 632, 633, 634, 635, 106, 637, 638, 639, 640, 641, 107, 643, 644, 645, 646, 647, 3, 19, 115, 691, 692, 693, 694, 695, 116, 697, 698, 699, 700, 701, 117, 703, 704, 705, 706, 707, 118, 709, 710, 711, 712, 713, 119, 715, 716, 717, 718, 719, 20, 121, 727, 728, 729, 730, 731, 122, 733, 734, 735, 736, 737, 123, 739, 740, 741, 742, 743, 124, 745, 746, 747, 748, 749, 125, 751, 752, 753, 754, 755, 21, 127, 763, 764, 765, 766, 767, 128, 769, 770, 771, 772, 773, 129, 775, 776, 777, 778, 779, 130, 781, 782, 783, 784, 785, 131, 787, 788, 789, 790, 791, 22, 133, 799, 800, 801, 802, 803, 134, 805, 806, 807, 808, 809, 135, 811, 812, 813, 814, 815, 136, 817, 818, 819, 820, 821, 137, 823, 824, 825, 826, 827, 23, 139, 835, 836, 837, 838, 839, 140, 841, 842, 843, 844, 845, 141, 847, 848, 849, 850, 851, 142, 853, 854, 855, 856, 857, 143, 859, 860, 861, 862, 863, 4, 25, 151, 907, 908, 909, 910, 911, 152, 913, 914, 915, 916, 917, 153, 919, 920, 921, 922, 923, 154, 925, 926, 927, 928, 929, 155, 931, 932, 933, 934, 935, 26, 157, 943, 944, 945, 946, 947, 158, 949, 950, 951, 952, 953, 159, 955, 956, 957, 958, 959, 160, 961, 962, 963, 964, 965, 161, 967, 968, 969, 970, 971, 27, 163, 979, 980, 981, 982, 983, 164, 985, 986, 987, 988, 989, 165, 991, 992, 993, 994, 995, 166, 997, 998, 999, 167, 28, 169, 170, 171, 172, 173, 29, 175, 176, 177, 178, 179, 5, 31, 187, 188, 189, 190, 191, 32, 193, 194, 195, 196, 197, 33, 199, 200, 201, 202, 203, 34, 205, 206, 207, 208, 209, 35, 211, 212, 213, 214, 215]);
	});
});
