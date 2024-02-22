import { OperatorsManager, pega } from "pega-model";
import { Selector } from "test-maker";

export const operatorsManager = new OperatorsManager();

export const common = {
    extra: {
        env: {
            name: 'dev'
        },
        operatorsManager: operatorsManager,
    },
    hooks:{
        beforeAll: (async (runInfo:any)=>{
            let name = runInfo.configuration.extra.env.name;
            console.log("current env="+name);
            await operatorsManager.SetOperatorsSource(getUsersPool(common.extra.env.name));
        }), 
        afterEachScenario: (async()=>{
            if(await Selector('.icons.avatar',{timeout:2000}).exists){
                await pega.logoff();
            }
        })
    }

}

let users = [];

const dev_users = [
    {
        id: 'user',
        alt: [
            { username: 'test.cafe1', password: 'Rulesfeb24!' },
            { username: 'test.cafe1', password: 'Rulesfeb24!' }
        ],
    },
    {
        id: 'advisor',
        alt: [
            { username: 'advisor1', password: 'adv1' },
            { username: 'advisor2', password: 'adv2' }
        ]
    }
];


const staging_users = [
    {
        id: 'user',
        alt: [
            { username: 'test.cafe1', password: 'Rulesfeb24!' },
            { username: 'test.cafe1', password: 'Rulesfeb24!' }
        ]
    },
    {
        id: 'advisor',
        alt: [
            { username: 'advisor1', password: 'adv1' },
            { username: 'advisor2', password: 'adv2' }
        ]
    }
];

export function getUsersPool(env: string) {
    switch (env) {
        case 'dev':
            users = dev_users;
            break;
        case 'stage':
            users = staging_users;
            break;
        default:
            users = [
                {
                    id: 'user',
                    alt: [
                        { username: 'test.cafe1', password: 'Rulesfeb24!' }
                    ]
                }
            ]
            break;
    }
    return users;
}


export function getUrl(env: string) {
    let url = '';
    switch (env) {
        case 'dev':
            url = 'https://pega870-web.tm.k-expert.com/prweb/';
            break;
        case 'stage':
            url = 'https://pega870-web.tm.k-expert.com/prweb/';
            break;
        default:
            url = 'https://pega870-web.tm.k-expert.com/prweb/';
            break;
    }
    return url;
}