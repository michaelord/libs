import {Table} from 'components/editable';
import * as Types from 'components/types';
import React from 'react';

// prettier-ignore
const str:string = "lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor, at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci, a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor, id aliquet lectus proin nibh nisl, condimentum id venenatis a, condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus, urna et pharetra pharetra, massa massa ultricies mi, quis hendrerit dolor magna eget est lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis, purus sit amet volutpat consequat, mauris nunc congue nisi, vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna ac placerat vestibulum, lectus mauris ultrices eros, in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum, faucibus vitae aliquet nec, ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien, faucibus et molestie ac, feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa, eget egestas purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae, auctor eu augue ut lectus arcu, bibendum at varius vel, pharetra vel turpis nunc eget lorem dolor, sed viverra ipsum nunc aliquet bibendum enim, facilisis gravida neque convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque, volutpat ac tincidunt vitae, semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero, id faucibus nisl tincidunt eget nullam non nisi est, sit amet facilisis magna etiam tempor, orci eu lobortis elementum, nibh tellus molestie nunc, non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus, at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan, lacus vel facilisis volutpat, est velit egestas dui, id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc, consequat interdum varius sit amet, mattis vulputate enim nulla aliquet porttitor lacus, luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo, laoreet sit amet cursus sit amet, dictum sit amet justo donec enim diam, vulputate ut pharetra sit amet, aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi, quis eleifend quam adipiscing vitae proin sagittis, nisl rhoncus mattis rhoncus, urna neque viverra justo, nec ultrices dui sapien eget mi proin sed libero enim, sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc, sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis, bibendum ut tristique et, egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim, sit amet venenatis urna cursus eget nunc scelerisque viverra mauris, in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus, dictum at tempor commodo, ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit, scelerisque in dictum non, consectetur a erat nam at lectus urna duis convallis convallis tellus, id interdum velit laoreet id donec ultrices tincidunt arcu, non sodales neque sodales ut etiam sit amet nisl purus, in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci, ac auctor augue mauris augue neque, gravida in fermentum et, sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum, odio eu feugiat pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris, cursus mattis molestie a, iaculis at erat pellentesque adipiscing commodo elit, at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna, id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc, faucibus a pellentesque sit amet, porttitor eget dolor morbi non arcu risus, quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna, molestie at elementum eu, facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a molestie";

// prettier-ignore
const pos:Array<number> = [5,11,17,21,27,39,50,55,58,67,73,77,82,89,100,107,113,123,129,139,147,153,159,163,168,177,187,197,202,206,216,220,232,237,243,252,258,268,273,278,283,292,304,314,318,327,330,337,342,350,355,364,367,376,381,391,398,402,407,413,419,426,438,446,451,455,460,466,469,474,481,486,494,503,506,514,519,523,529,536,544,550,557,561,571,574,580,586,589,594,607,612,621,629,633,641,649,659,669,678,690,699,705,713,723,730,734,743,751,761,770,775,781,791,801,807,812,816,822,832,840,843,846,850,858,864,870,875,881,891,899,902,906,911,921,932,938,942,948,958,968,974,982,987,995,998,1005,1010,1015,1018,1025,1031,1039,1048,1051,1054,1060,1068,1081,1089,1098,1107,1113,1115,1127,1133,1140,1145,1150,1153,1160,1163,1168,1180,1187,1200,1203,1208,1216,1219,1227,1234,1240,1245,1251,1263,1266,1276,1279,1291,1297,1304,1317,1326,1332,1342,1351,1354,1360,1363,1373,1379,1382,1389,1397,1401,1409,1414,1417,1426,1436,1442,1448,1458,1462,1467,1477,1483,1489,1494,1498,1504,1510,1516,1520,1526,1538,1549,1554,1567,1576,1582,1592,1601,1604,1610,1613,1623,1629,1632,1639,1647,1655,1660,1668,1673,1682,1692,1698,1702,1707,1713,1721,1726,1734,1741,1748,1751,1755,1765,1772,1781,1789,1799,1805,1809,1814,1823,1834,1841,1846,1853,1859,1865,1874,1881,1888,1890,1895,1904,1908,1913,1916,1920,1928,1936,1941,1945,1950,1957,1962,1973,1978,1981,1988,1996,2004,2011,2021,2027,2030,2039,2051,2058,2065,2074,2080,2083,2090,2097,2103,2113,2117,2120,2127,2134,2138,2143,2147,2156,2159,2167,2172,2182,2186,2194,2199,2205,2211,2218,2226,2229,2239,2243,2245,2250,2263,2270,2273,2276,2281,2286,2289,2296,2305,2311,2319,2324,2336,2340,2345,2351,2358,2363,2369,2374,2379,2388,2395,2403,2412,2418,2421,2427,2434,2438,2446,2451,2459,2465,2468,2474,2477,2484,2492,2500,2512,2520,2527,2530,2537,2543,2549,2558,2565,2577,2581,2586,2593,2597,2605,2612,2615,2619,2629,2636,2645,2656,2664,2668,2681,2686,2698,2708,2713,2723,2732,2740,2748,2751,2757,2762,2767,2774,2781,2786,2789,2801,2807,2813,2819,2827,2836,2839,2848,2852,2860,2864,2871,2882,2889,2901,2907,2911,2923,2929,2939,2946,2953,2958,2966,2972,2980,2989,2992,2997,3003,3015,3018,3027,3034,3041,3044,3050,3053,3060,3066,3075,3078,3085,3090,3099,3103,3110,3115,3120,3126,3133,3137,3145,3151,3156,3164,3173,3179,3189,3197,3203,3213,3215,3220,3227,3234,3241,3247,3254,3259,3272,3276,3280,3288,3292,3295,3302,3312,3315,3321,3326,3336,3341,3345,3351,3356,3362,3370,3379,3382,3394,3400,3403,3412,3421,3431,3439,3444,3451,3460,3463,3473,3480,3487,3492,3499,3505,3508,3517,3522,3525,3535,3542,3545,3551,3561,3564,3576,3582,3592,3598,3608,3612,3616,3621,3627,3631,3640,3646,3654,3666,3675,3687,3695,3698,3707,3712,3722,3727,3734,3738,3743,3748,3752,3757,3767,3773,3779,3787,3792,3795,3804,3815,3820,3827,3836,3842,3846,3854,3860,3865,3869,3873,3878,3885,3890,3893,3900,3910,3919,3925,3928,3932,3937,3940,3945,3950,3956,3966,3972,3975,3981,3989,4000,4006,4014,4021,4028,4031,4040,4043,4050,4060,4066,4076,4089,4094,4099,4107,4111,4118,4126,4136,4139,4146,4150,4161,4169,4178,4188,4192,4199,4205,4215,4219,4227,4237,4242,4246,4252,4260,4268,4277,4287,4293,4297,4307,4317,4321,4327,4335,4340,4343,4350,4355,4360,4363,4367,4373,4382,4387,4391,4396,4401,4410,4421,4430,4434,4444,4452,4457,4464,4469,4473,4483,4486,4490,4495,4502,4510,4515,4525,4531,4541,4546,4555,4562,4565,4572,4584,4594,4600,4607,4613,4623,4632,4639,4643,4649,4656,4666,4671,4677,4685,4695,4702,4709,4718,4725,4733,4736,4739,4749,4756,4764,4768,4775,4782,4790,4794,4799,4806,4810,4816,4823,4827,4832,4838,4844,4849,4855,4865,4868,4877,4881,4887,4895,4898,4903,4912,4922,4925,4930,4937,4946,4949,4958,4964,4971,4978,4986,4996,5002,5007,5016,5021,5032,5038,5044,5054,5059,5067,5074,5083,5088,5094,5102,5109,5113,5122,5126,5133,5138,5141,5147,5151,5158,5164,5168,5177,5184,5187,5190,5193,5202,5208,5216,5223,5231,5239,5244,5247,5252,5259,5267,5272,5280,5285,5290,5299,5306,5312,5316,5324,5331,5340,5344,5349,5356,5361,5365,5373,5378,5385,5394,5397,5407,5411,5419,5424,5430,5442,5451,5459,5466,5472,5475,5484,5489,5495,5508,5518,5524,5528,5533,5543,5548,5555,5560,5565,5577,5585,5593,5596,5604,5608,5618,5621,5627,5637,5643,5652,5658,5666,5669,5682,5688,5697,5702,5712,5718,5722,5729,5739,5742,5750,5756,5764,5767,5772,5779,5786,5789,5796,5805,5817,5819,5825,5836,5840,5845,5849,5854,5862,5870,5873,5878,5884,5888,5898,5903,5906,5911,5919,5928,5937,5946,5954,5962,5968,5973,5980,5992,5995,6002,6007,6019,6021,6026,6030,6033,6040,6045,6050,6060,6070,6078,6081,6090,6096,6104,6107,6113,6122,6132,6138,6142,6150,6156,6164,6167,6173,6177,6182,6187,6194,6197,6204,6209,6213,6216,6223,6229,6232,6242,6250,6257,6265,6269,6276,6282,6285,6292,6298,6305,6311,6318,6326,6329,6339,6343,6356,6359,6364,6374,6382,6389,6396,6403,6416,6419,6429,6436,6444,6450,6459,6464,6475,6480,6483,6491,6500,6505,6511,6521,6527,6531,6539,6546,6551,6554,6558,6561,6567,6574,6580,6584,6594,6601,6609,6613,6617,6623,6631,6636,6646,6656,6668,6671,6675,6680,6683,6688,6696,6703,6710,6719,6722,6730,6733,6738,6751,6762,6770,6776,6779,6789,6793,6802,6806,6811,6817,6826,6832,6839,6847,6853,6856,6865,6871,6879,6883,6893,6901,6906,6909,6916,6926,6936,6943,6946,6953,6956,6962,6970,6981,6984,6987,6994,7002,7010,7022,7029,7035,7040,7046,7055,7057,7070,7074,7080,7090,7095,7101,7107,7111,7116,7123,7128,7135,7140,7148,7151,7156,7160,7165,7175,7184,7190,7194,7199,7205,7217,7226,7235,7243,7249,7255,7261,7265,7271,7283,7294,7299,7304,7314,7327,7332,7336,7341,7349,7355,7364,7371,7380,7386,7388,7393,7400,7406,7413,7420,7428,7435,7439,7444,7456,7463,7476,7485,7498,7507,7513,7523,7532,7535,7541,7544,7554,7560,7563,7570,7578,7587,7596,7606,7614,7620,7624,7630,7639,7642,7652,7656,7666,7670,7675,7681,7686,7694,7699,7706,7710,7721,7726,7732,7743,7753,7759,7763,7771,7774,7784,7792,7797,7801,7811,7820,7827,7835,7840,7844,7853,7859,7867,7877,7884,7886];

const names: Array<string> = [
	'Marshall Lefort',
	'Jean Talcott',
	'Ignacio Allred',
	'Mike Washinton',
	'Kurt Orlando',
	'Byron Grandberry',
	'Nickolas Scheller',
	'Kennith Ducharme',
	'Efrain Newhart',
	'Mel Hardwick',
	'Roseanne Nuckolls',
	'Joaquina Cedeno',
	'Candis Halstead',
	'Elfrieda Lukasiewicz',
	'Kirstie Demars',
	'Collette Pinon',
	'Gaynell Hinderliter',
	'Christi Haydel',
	'Idella Shipley',
	'Chere Fremont',
];

const imageObj = (width: number, height: number = 0): Types.Image => {
	const h: number = height || width;
	const data: Types.Image = {
		src: `//via.placeholder.com/${width}x${h}`,
		width,
		height: h,
		alt: '[Placeholder]',
	};

	return data;
};

const name = (): string => {
	const pos: number = Math.floor(Math.random() * names.length);
	return names[pos];
};

const role = (): string => {
	return '[Developer]';
};

const Data = (props: any) => {
	const data = [];

	Object.entries(props).forEach(([key, value]) => {
		const type = Array.isArray(value) ? 'array' : typeof value;

		data.push([key, `<pre>${JSON.stringify(value, null, '\t')}</pre>`, type]);
	});

	if (data.length === 0) {
		return null;
	}

	return <Table isMobile layout="row" headings={['Prop', 'Data', 'Type']} data={data} />;
};

type Props = {
	count?: number;
};

const p = (count: number = 1) => {
	const children = [...Array(count)];

	return children.map(() => `<p>${generateLorem(Math.floor(Math.random() * 40) + 20)}</p>`).join('');
};

const P = (props: Props) => {
	const {count = 1} = props;
	const children = [...Array(count)].map((item: any, index) => (
		<p dangerouslySetInnerHTML={{__html: generateLorem(Math.floor(Math.random() * 40) + 20)}} key={`l-${index}`} />
	));

	return <>{children}</>;
};

const content = (props?: Props): Types.Children => {
	return <P {...props} />;
};

const UL = (props: any) => {
	return (
		<ul>
			<li>list list</li>
			<li>list list</li>
			<li>list list</li>
		</ul>
	);
};

export const generateLorem = (len: number = 10, type: 'w' | 'c' = 'w') => {
	if (type === 'c') {
		return str.substr(0, len);
	}

	const d = Math.floor(len / pos.length);
	const sIndex = pos[(len % pos.length) - 1];
	let sentence = '';

	for (var i = 0; i < d; i++) {
		sentence += str + ' ';
	}

	if (str.charAt(sIndex - 1) == ',') {
		return sentence + str.substr(0, sIndex - 1);
	}

	return sentence + str.substr(0, sIndex);
};

export const generateWords = (len: number = 20) => {
	return generateLorem(len, 'w');
};

export const generateChars = (len: number = 55) => {
	return generateLorem(len, 'c');
};

const heading = () => {
	return generateLorem(6, 'w');
};

export const Placeholder = {
	imageObj,
	name,
	names,
	role,

	p,
	words: generateWords,
	heading,

	content,

	// components
	Data,
	P,
	UL,
};
