const english = {
    // texts displayed in the html
    header: {
        title: 'Survival of the Best Fit',
        subtitle: 'How AI hires like humans',
    },
    about: {
        aboutBody: 'Survival of the Best Fit is a game to demonstrate how blind use of AI in hiring can further perpetuate human bias. In this simulation, users will act as recruiters at a fast-growing company. To reduce costs and maximize output, they would use a new, obscure AI system to replace human recruiters, only to realize that this creates a snowball of problems.\nThis is a project by Gabor Csapo, Jihyun Kim, Miha Klasinc, and Alia ElKattan',
    },
 
    //resources page
 
    resources: {
        title: 'Machines, Bias, and Fairness',
        aboutBiasTitle: 'How does \'machine bias\' work?',
        aboutBias: 'xx\n xxx',
    },
 
    // texts displayed during the game
    titleStage: {
        header: 'Congratulations!',
        instruction: 'You\’ve just secured 1 million dollars from Orange Valley ventures. Ready to grow your new startup?',
        responses: [
            'Start Game',
        ],
    },
    instructions: {
        manual: {
            click: 'Click on candidates to see their CVs',
            eval: 'Click Accept to hire a candidate, or Reject to see more new applicants.',
        },
        ml: {

        },
    },
 
    smallOfficeStage: {
        subject: 'Our investment in your startup',
        messageFromVc: 'We are excited to see you grow the startup. It\'s a competitive market so hire only the best.',
        responses: ['Let\'s start hiring'],
        hiringGoal: 3,
    },
 
    mediumOfficeStage: {
        subject: 'Good start',
        messageFromVc: 'However, for more funding you\’ll need to hire faster, so pay attention to the clock!',
        responses: [
            'I\'ll hire faster.',
            'Hmm, okay.',
        ],
        hiringGoal: 5,
        duration: 45
    },
 
    largeOfficeStage: {
        subject: 'Next investment round...',
        messageFromVc: 'Good effort, but you need to hire even faster to get more funding. Can you pull this off?',
        responses: [
            'Of course!',
            'I\'m a bit overwhelmed.',
        ],
        hiringGoal: 8,
        previousStageFailed: 'You ran out of time. The investors want to see results, you\'ll have to hire even more people next month!',
        duration: 45

    },
 
    mlTransition: {
        subject: 'Using AI?',
        messageFromVc: 'It\'s just too competitive here in Orange Valley...Can you talk to your software engineers to speed things up? I heard AI solves all problems nowadays.',
        responses: [
            'Sure, we can automate it away!',
            'Hmm, I will email the engineers.',
        ],
        previousStageFailed: 'This is clearly not working. Talk to your software engineers to see if they can speed things up. Maybe AI is the solution.',
    },
    // add transition here. e-mail from INVESTOR says:  We’ve made good progress, but the faster we grow, the more profit we’ll make. I suggest you use an automated program to help with hiring. Check with the software development team?
 
    // email from SOFTWARE ENGINEER
    conversation: [
        {
            dialogue_step: 1,
            text: 'You asked us how we can hire faster. So we built a hiring algorithm using <i>machine learning</i>. Basically, we will teach a computer to hire like you, but way faster!',
            answer_choice: [
                {
                    text: 'How does that work?',
                    response: '',
                },
                {
                    text: 'That\'s great.',
                    response: 'Perfect! ',

                },
            ],
        },
        {
            dialogue_step: 2,
            text: 'First, the algorithm will read through past applicants\' CVs and whether they were hired or not. It will then learn what makes a candidate good or bad by <u>copying your hiring decision process</u>!',
            answer_choice: [
                {
                    text: 'A machine will think like me?',
                    response: 'Thinking is a strong word. ',
                },
                {
                    text: 'Works for me ',
                    response: 'We have to be careful though.',
                },
            ],
        },
        {
            dialogue_step: 3,
            text: 'It’s impossible for the program to know good or bad candidates without human input - we first need to give it <u>a lot of data</u> to learn from.',
            answer_choice: [
                {
                    text: 'Where do we get the data?',
                    response: '',
                },
                {
                    text: 'How much is a lot?',
                    response: '',
                },
            ],
        },
        {
            dialogue_step: 4,
            text: 'I need your help: can you send me the CVs of all applicants you’ve evaluated so far? <u><b>Click</b> on the file</u> named <i>"cv_all.zip"</i> <span class="desktop__folder-icon"></span> on your desktop',
            file_drag: true,
            answer_choice: [],
        },
        {
            dialogue_step: 5,
            text: 'Thanks! Machine learning algorithms get more accurate with more data, so here’s what we’ll do: use big tech companies\' data. They have huge applicant records, so we can merge our CVs with theirs and train our model! \n <u>Choose a company</u> you think hires smart people.',
            dataset_choice: true,
            answer_choice: [
                'Google',
                'Amazon',
                'Facebook',
            ],
        },
        {
            dialogue_step: 6,
            text: 'That\s it! We can now train the algorithm with a lot of past data and put it to use!',
            answer_choice: [
                {
                    text: 'Great, let\'s train it!',
                },
            ],
        },
    ],

        stats_conversation: [
        {
            dialogue_step: 1,
            text: 'We\'re trying to figure out what\'s wrong with the algorithm.',
            answer_choice: [
                {
                    text: 'Let\'s break down its decisions by orange and blue?',
                    response: '',
                },
            ],
        },
        {
            dialogue_step: 2,
            text: 'Here they are; what do you think?',
            stats: true,
            answer_choice: [
                {
                    text: 'We\'re rejecting more blue people.',
                    response: '',
                },
                {
                    text: 'This isn\'t biased.',
                    response: 'If you look carefully, we have a similar number of equally qualified blue and orange candidates and yet the algorithm accepts a lot more orange. ',
                },
            ],
        },
        {
            dialogue_step: 3,
            text: 'Let\s find out how! Do you remember how we first trained the algorithm?',
            answer_choice: [
                {
                    text: 'I sent you my decisions for the algorithm to mimic me.',
                    response: 'Correct. ',
                },
                {
                    text: 'I don\'t care, fix it!',
                    response: 'The machine was created using your decisions, so I need your help. ',
                },
            ],
        },
        // {
        //     dialogue_step: 4,
        //     text: 'Let\'s analyze your decisions.',
        //     answer_choice: [
        //         {
        //             text: 'Ok',
        //             response: '',
        //         },
        //         {
        //             text: 'Sure, but I wasn\'t biased',
        //             response: 'You might\'ve not been, but maybe your applicant pool was. ',
        //         },
        //     ],
        // },
        {
            dialogue_step: 5,
            text: 'Look at our data from manual hiring: ',
            stats: true,
            manualStats: true,
            answer_choice: [
                {
                    text: 'I hired a lot more orange people.',
                    response: 'Our algorithm tries to copy our previous hiring, so if you hired more orange people, it \'learns\' to favor them. ',
                },
                {
                    text: 'I\'m sure I wasn\'t biased!',
                    response: 'I\'m sure you had good intentions, but we had very few blue applicants in our first stage, and so much less were accepted. The algorithm misinterpreted that as them being unfavorable candidates.',
                },
            ],
        },
        {
            dialogue_step: 6,
            text: ' ',
            answer_choice: [
                {
                    text: 'We should have checked the data.',
                    response: 'Yes, I\'m reading that we need to be more careful the origin and statistical analysis of our data',
                },
                {
                    text: 'But the CVs didn\'t have colors on them!',
                    response: 'It could indirectly learn other elements that differentiate Orange and Blue People, e.g. Orange people usually attend University College Orange Valley while Blue people attend Bluetown University. ',
                },
            ],
        },
        {
            dialogue_step: 7,
            text: 'We should have also checked the quality of the big company dataset you sent me! How am I supposed to understand hiring decisions? I\’m a software engineer!',
            answer_choice: [
                {
                    text: 'We should\'ve worked together more and been more careful...',
                    response: '',
                },
                // {
                //     text: 'We should have worked more together.',
                //     response: '',
                // },
            ],
        },
    ],
 
    mlLabStage: {       
        narration: [
            {
                news: [
                    'Best way to cut costs: use machine learning in everything',
                    'Ambition said to be the most important trait in employees',
                    'Diplomatic or aggressive? Different ways to describe the blue people',
                ],
            },
            {
                messageFromVc: 'You’ve been able to hire at 10x the past rate AND cut costs! Great job, the algorithm seems to be working',
                responses: [
                    'Great to hear!',
                ],
                news: [
                    'Orange Valley Review: Does the future of hiring lie in AI?',
                    'Tech Junkies: Hiring algorithms are the next big thing',
                ],
            },
            {
                launchCVInspector: true,
                messageFromVc: 'I just got a complaint from a past applicant named <u>Elvan Yang</u> asking why they were rejected. Can you look into it?',
                responses: [
                    'I\'ll look for Elvan in the data inspector!',
                    'Ok, I\'ll email you with my results.',
                ],
                inspectQuestion: 'So why was Elvan rejected?',
                inspectResponses: [
                    'I have no idea.',
                    'Maybe because Elvan is blue?',
                ],
            },
            {
                breaking: true,
                messageFromVc: 'Hey, some reporters are talking about hiring bias, but you’re off the hook since it’s all automated now, right?',
                responses: [
                    'Machines can\'t be biased, right?',
                    'Not sure, I\'ll keep an eye on the machine\'s decisions.',
                ],
                news: [
                    'Techountability: Research shows hiring algorithms can inherit human biases against minorities',
                    'Tech Junkies: How do hiring algorithms work?',
                ],
            },
            {
                launchMachineInspector: true,
                messageFromVc: 'I’m hearing that you may be involved with this bias story. Reporters are asking for transparency. Review our evaluation metrics to see if you can go public.',
                responses: [
                    'Let me talk to our software engineer again!',
                    'Um, actually... We might have a problem.',
                ],
                inspectQuestion: 'A recent investigation says we discriminate against Blueville residents! How could that be?',
                inspectResponses: [
                    'We trained on more good orange candidates than blue. That made it biased towards orange.',
                    'Maybe the big tech company dataset was full of bias? We should have looked into my training data more.',
                ],
                news: [
                    'Blueville Gazette: Blueville residents treated unfairly by an algorithm?',
                    'The justice: Orange privilege in the tech industry',
                ],
            },
            {
                messageFromVc: 'Shut down the company!!! The news got out and you just got sued for hiring discrimination. All the investors are pulling out! What on earth went wrong?',
                responses: [
                    'Let\'s wrap up what happened.',
                ],
                news: [
                    'Blueville Daily: Hiring algorithm scandal blows out of proportions',
                    'The Justice: Tech companies need to be held accountable',

                ],
            },
        ],
    },
    selfPromoMessages: [
        'Hire me!',
        'I\'m the best',
        'Help me support my family!',
        'I\'m an expert!',
        'Help me pay off my student loan!',
        'I desperately need a job!',
        'Choose me!',
        'I\'m a nice person!',
        'I am ambitious',
        'This is the startup with potential',
        'You seem like a great CEO',
        'I want to work for you',
        'I am great with people',
        'I can do better than these people',
        'I am a fast learner!',
        'Why wouldn\'t you hire me?',
        'I have two kids',
        'I was the smartest in my class'
    ]
};

const chinese = {
    header: {
        title: '适者生存',
        subtitle: 'AI如何像人类一样招聘',
    },
    about: {
        aboutBody: '《适者生存》是一款展示在招聘中盲目使用AI如何进一步加剧人类偏见的游戏。在这个模拟中，用户将扮演一家快速发展公司的招聘人员。为了降低成本和最大化产出，他们将使用一个新的、鲜为人知的AI系统来取代人类招聘人员，却意识到这会引发一系列问题。\n这是由 Gabor Csapo、Jihyun Kim、Miha Klasinc 和 Alia ElKattan 共同开发的项目',
    },

    resources: {
        title: '机器、偏见与公平',
        aboutBiasTitle: '"机器偏见"是如何运作的？',
        aboutBias: 'xx\n xxx',
    },

    titleStage: {
        header: '恭喜！',
        instruction: '你刚刚从橙谷风投获得了100万美元的投资。准备好发展你的新创业公司了吗？',
        responses: [
            '开始游戏',
        ],
    },
    instructions: {
        manual: {
            click: '点击候选人查看他们的简历',
            eval: '点击"接受"录用候选人，或点击"拒绝"查看更多新申请者。',
        },
        ml: {

        },
    },

    smallOfficeStage: {
        subject: '我们对你创业公司的投资',
        messageFromVc: '我们很高兴看到你发展这家创业公司。这是一个竞争激烈的市场，所以只录用最优秀的人才。',
        responses: ['让我们开始招聘'],
        hiringGoal: 3,
    },

    mediumOfficeStage: {
        subject: '好的开始',
        messageFromVc: '但是，要获得更多资金，你需要更快地招聘，所以注意时间！',
        responses: [
            '我会更快招聘的。',
            '嗯，好的。',
        ],
        hiringGoal: 5,
        duration: 45
    },

    largeOfficeStage: {
        subject: '下一轮融资...',
        messageFromVc: '做得不错，但你需要更快地招聘才能获得更多资金。你能做到吗？',
        responses: [
            '当然！',
            '我有点不知所措。',
        ],
        hiringGoal: 8,
        previousStageFailed: '你时间不够了。投资者想要看到结果，下个月你必须招聘更多人！',
        duration: 45

    },

    mlTransition: {
        subject: '使用AI？',
        messageFromVc: '橙谷这里竞争太激烈了...你能和你的软件工程师谈谈加快进度吗？我听说现在AI能解决所有问题。',
        responses: [
            '当然，我们可以用自动化来解决！',
            '嗯，我会给工程师发邮件。',
        ],
        previousStageFailed: '这显然行不通。和你的软件工程师谈谈，看看他们能否加快进度。也许AI是解决方案。',
    },

    conversation: [
        {
            dialogue_step: 1,
            text: '你问我们如何能更快招聘。所以我们用<i>机器学习</i>构建了一个招聘算法。基本上，我们会教电脑像你一样招聘，但速度要快得多！',
            answer_choice: [
                {
                    text: '这是如何运作的？',
                    response: '',
                },
                {
                    text: '太好了。',
                    response: '完美！',

                },
            ],
        },
        {
            dialogue_step: 2,
            text: '首先，算法会读取过去申请者的简历以及他们是否被录用。然后它会通过<u>模仿你的招聘决策过程</u>来学习什么使候选人优秀或不合格！',
            answer_choice: [
                {
                    text: '机器会像我一样思考？',
                    response: '"思考"这个词用得太重了。',
                },
                {
                    text: '对我来说没问题',
                    response: '不过我们得小心点。',
                },
            ],
        },
        {
            dialogue_step: 3,
            text: '没有人类输入，程序不可能知道候选人的好坏——我们首先需要给它<u>大量数据</u>来学习。',
            answer_choice: [
                {
                    text: '我们从哪里获取数据？',
                    response: '',
                },
                {
                    text: '多少算多？',
                    response: '',
                },
            ],
        },
        {
            dialogue_step: 4,
            text: '我需要你的帮助：你能把你目前评估过的所有申请者的简历发给我吗？<u><b>点击</b>桌面上</u>名为<i>"cv_all.zip"</i><span class="desktop__folder-icon"></span>的文件',
            file_drag: true,
            answer_choice: [],
        },
        {
            dialogue_step: 5,
            text: '谢谢！机器学习算法随着数据增多会变得更准确，所以我们要这样做：使用大型科技公司的数据。他们有大量的申请者记录，所以我们可以将我们的简历与他们的合并，训练我们的模型！\n<u>选择一家</u>你认为招聘聪明人的公司。',
            dataset_choice: true,
            answer_choice: [
                'Google',
                'Amazon',
                'Facebook',
            ],
        },
        {
            dialogue_step: 6,
            text: '就这样！我们现在可以用大量过去的数据训练算法并投入使用！',
            answer_choice: [
                {
                    text: '太好了，让我们训练它！',
                },
            ],
        },
    ],

    stats_conversation: [
        {
            dialogue_step: 1,
            text: '我们正在试图弄清楚算法出了什么问题。',
            answer_choice: [
                {
                    text: '让我们按橙色和蓝色来分解它的决策？',
                    response: '',
                },
            ],
        },
        {
            dialogue_step: 2,
            text: '在这里；你怎么看？',
            stats: true,
            answer_choice: [
                {
                    text: '我们拒绝了更多蓝色的人。',
                    response: '',
                },
                {
                    text: '这没有偏见。',
                    response: '如果你仔细看，我们有同样数量的同等资质的蓝色和橙色候选人，但算法接受的橙色要多得多。',
                },
            ],
        },
        {
            dialogue_step: 3,
            text: '让我们找出原因！你还记得我们最初是如何训练算法的吗？',
            answer_choice: [
                {
                    text: '我把我的决策发给你，让算法模仿我。',
                    response: '正确。',
                },
                {
                    text: '我不在乎，修好它！',
                    response: '机器是根据你的决策创建的，所以我需要你的帮助。',
                },
            ],
        },
        {
            dialogue_step: 5,
            text: '看看我们手动招聘的数据：',
            stats: true,
            manualStats: true,
            answer_choice: [
                {
                    text: '我录用了更多橙色的人。',
                    response: '我们的算法试图复制我们之前的招聘，所以如果你录用了更多橙色的人，它就会"学习"偏向他们。',
                },
                {
                    text: '我确定我没有偏见！',
                    response: '我相信你有良好的意图，但我们在第一阶段的蓝色申请者非常少，被录用的就更少了。算法错误地将此解释为他们是不利的候选人。',
                },
            ],
        },
        {
            dialogue_step: 6,
            text: ' ',
            answer_choice: [
                {
                    text: '我们应该检查数据的。',
                    response: '是的，我认为我们需要更加小心数据的来源和统计分析',
                },
                {
                    text: '但简历上没有颜色！',
                    response: '它可以间接学习区分橙色和蓝色人的其他元素，例如橙色人通常上橙谷大学学院，而蓝色人上蓝镇大学。',
                },
            ],
        },
        {
            dialogue_step: 7,
            text: '我们也应该检查你发给我的大公司数据集的质量！我怎么能理解招聘决策？我是软件工程师！',
            answer_choice: [
                {
                    text: '我们应该更多地合作，更加小心...',
                    response: '',
                },
            ],
        },
    ],

    mlLabStage: {
        narration: [
            {
                news: [
                    '降低成本的最佳方法：在所有事情中使用机器学习',
                    '事业心被认为是员工最重要的特质',
                    '外交还是激进？描述蓝色人的不同方式',
                ],
            },
            {
                messageFromVc: '你已经能够以过去10倍的速度招聘，还降低了成本！做得好，算法似乎在工作',
                responses: [
                    '很高兴听到这个！',
                ],
                news: [
                    '橙谷评论：招聘的未来在于AI吗？',
                    '科技迷：招聘算法是下一件大事',
                ],
            },
            {
                launchCVInspector: true,
                messageFromVc: '我刚刚收到一位名叫<u>Elvan Yang</u>的前申请者的投诉，问为什么他们被拒绝了。你能调查一下吗？',
                responses: [
                    '我会在数据检查器中查找Elvan！',
                    '好的，我会把结果发邮件给你。',
                ],
                inspectQuestion: '那么Elvan为什么被拒绝？',
                inspectResponses: [
                    '我不知道。',
                    '也许因为Elvan是蓝色的？',
                ],
            },
            {
                breaking: true,
                messageFromVc: '嘿，一些记者在谈论招聘偏见，但既然现在都是自动化的，你就没事了，对吧？',
                responses: [
                    '机器不会有偏见，对吧？',
                    '不确定，我会留意机器的决策。',
                ],
                news: [
                    '科技问责：研究表明招聘算法可能继承人类对少数群体的偏见',
                    '科技迷：招聘算法如何运作？',
                ],
            },
            {
                launchMachineInspector: true,
                messageFromVc: '我听说你可能卷入了这个偏见事件。记者们要求透明度。审查我们的评估指标，看看你能否公开。',
                responses: [
                    '让我再和我们的软件工程师谈谈！',
                    '嗯，实际上...我们可能有问题。',
                ],
                inspectQuestion: '最近的一项调查说我们歧视蓝镇居民！怎么会这样？',
                inspectResponses: [
                    '我们训练的优秀橙色候选人比蓝色多。这使它偏向橙色。',
                    '也许大公司的数据集充满偏见？我们应该更多地研究我的训练数据。',
                ],
                news: [
                    '蓝镇公报：蓝镇居民被算法不公平对待？',
                    '正义：科技行业的橙色特权',
                ],
            },
            {
                messageFromVc: '关闭公司！！！消息传出去了，你刚刚因招聘歧视被起诉。所有投资者都在撤资！到底出了什么问题？',
                responses: [
                    '让我们总结一下发生了什么。',
                ],
                news: [
                    '蓝镇日报：招聘算法丑闻愈演愈烈',
                    '正义：科技公司需要被问责',

                ],
            },
        ],
    },
    selfPromoMessages: [
        '录用我！',
        '我是最棒的',
        '帮我养家！',
        '我是专家！',
        '帮我还学生贷款！',
        '我非常需要一份工作！',
        '选我！',
        '我是个好人！',
        '我很有事业心',
        '这是一只有潜力的创业公司',
        '你看起来像个很棒的CEO',
        '我想为你工作',
        '我很善于与人相处',
        '我能比这些人做得更好',
        '我学得很快！',
        '你为什么不录用我？',
        '我有两个孩子',
        '我是班上最聪明的'
    ]
};

const language = 'chinese';

// exporting whatever is determined as the language.
// module.export is for pug, while the txt variable is just a global shatred variable holding all the texts and can be used in JS
// when loading in the ES6 application, there is no module provided so it is undefined
let txt;

// defining a global variable candidateClicked to access the ID globally without having to emit a value
let candidateClicked = 0;
let candidateInSpot = null;

function setLang(dictionary) {
    if (typeof module !== 'undefined') {
        module.exports = dictionary;
    } else {
        txt = dictionary;
    }
}

switch (language) {
case 'english':
    setLang(english);
    break;
case 'chinese':
    setLang(chinese);
    break;
case 'arabic':
    setLang(null);
    break;
default:
    setLang(chinese);
} 
