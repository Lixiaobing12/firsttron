<template>
    <navigation>
        <div class="mark"></div>
        <el-col :xs="22"
                :sm="20"
                :md="16"
                :lg="16"
                :xl="16">
            <div class="body-content">
                <el-card style="font-size:14px;margin-top:20px;">
                    <div slot="header"
                         class="clearfix">
                        <span class="bor">现在加入</span>
                    </div>
                    <el-row>
                        <el-col :span="24">
                            <div class="athwart-text">
                                <span class="el-text">赞助地址</span>
                                <el-input type="textarea"
                                          :rows="2"
                                          placeholder="请输入赞助地址"
                                          v-model="Obj.sponsorAddr">
                                </el-input>
                            </div>
                        </el-col>
                        <el-col class="athwart-text aa-border">
                            <span class="el-text">套餐</span>
                            <el-col v-for="item in configList.combo"
                                    :key="item"
                                    :xs="12"
                                    :sm="8"
                                    :md="6"
                                    :lg="6"
                                    :xl="6"
                                    style="margin-bottom:20px;font-size:16px;">
                                <el-button round
                                           style="width:80%;"
                                           :class="{tapStyle:Obj.amount === item}"
                                           @click="onclickTRX(item)">{{item}}TRX</el-button>
                            </el-col>
                        </el-col>
                    </el-row>
                    <div>
                        <el-button class="button-sl">加入</el-button>
                    </div>
                </el-card>

                <el-card style="font-size:14px;margin-top:20px;">
                    <div slot="header"
                         class="clearfix">
                        <span class="bor">公开社区统计</span>
                    </div>
                    <el-row :gutter="24"
                            type="flex"
                            justify="center">
                        <el-col :span="24">
                            <el-col v-for="(item,index) in configList.communitys.slice(0,3)"
                                    :key="index"
                                    :xs="{span:12}"
                                    :sm="{span:6,offset:2}"
                                    :md="{span:7,offset:1}"
                                    :lg="{span:7,offset:1}"
                                    :xl="{span:4,offset:5}"
                                    style="font-size:16px;">
                                <div class="athwart-text"
                                     style="border:1px solid #E8E8E8;margin:10px 0;">
                                    <div class="devire"
                                         :style="{'background-image':transform(index,'color')}"></div>
                                    <div class="flex-text">
                                        <div style="font-size:14px; color: rgba(0, 0, 0, 0.45);flex-shrik:1;">{{item.title}}</div>
                                        <div style="font-size:20px;font-weight:500;">{{item.amount}}</div>
                                        <div>
                                            <el-image style="width: 20px; height: 20px;float:right;"
                                                      :src="item.icon" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :xs="{span:24}"
                                    :sm="{span:11,offset:1}"
                                    :md="{span:11,offset:1}"
                                    :lg="{span:11,offset:1}"
                                    :xl="{span:6,offset:1}"
                                    style="font-size:16px;">
                                <div class="athwart-text"
                                     style="border:1px solid #E8E8E8;margin:10px 0;">
                                    <div class="flex-text">
                                        <div style="font-size:14px; color: rgba(0, 0, 0, 0.45);flex-shrik:1;">保险池金额(TRX)</div>
                                        <div style="font-size:20px;font-weight:500;margin:10px 0 20px;">{{configList.communitys[3].amount}}</div>
                                        <div style="font-size:14px;color:rgba(0,0,0,0.65)">
                                            <span>下一个结算日：Sun Feb 26 10:31:58 +0800 2012</span>
                                        </div>
                                        <el-divider style="margin:15px 0;"></el-divider>
                                        <div style="display:flex;justify-content:space-between;font-size:14px;width:90%;">
                                            <div><span style="color:rgba(0,0,0,0.65)">已补偿总金额</span> 10TRX</div>
                                            <div><span style="color:rgba(0,0,0,0.65)">已补偿人数</span> 0</div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :xs="{span:24}"
                                    :sm="{span:11,offset:1}"
                                    :md="{span:11,offset:1}"
                                    :lg="{span:11,offset:1}"
                                    :xl="{span:6,offset:1}"
                                    style="font-size:16px;">
                                <div class="athwart-text"
                                     style="border:1px solid #E8E8E8;margin:10px 0;height:180px;">
                                    <div class="flex-text">
                                        <div style="font-size:14px; color: rgba(0, 0, 0, 0.45);flex-shrik:1;">当日可奖励基金(TRX)</div>
                                        <div style="font-size:20px;font-weight:500;margin:10px 0 20px;">{{configList.communitys[4].amount}}</div>
                                    </div>
                                    <div>
                                        <button style="padding:8px 30px;color:#5B3B98;border-color:#5B3B98;background:#fff;border-radius:10px;">查看详情</button>
                                        <div style="font-size:14px;color:rgba(0,0,0,0.65);margin:10px 0;">详情页可查看当日排名页面</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-col>

                    </el-row>
                </el-card>

                <el-card style="font-size:14px;margin-top:20px;">
                    <div slot="header"
                         class="clearfix">
                        <span class="bor">个人资料</span>
                        <i class="el-icon-refresh"
                           style="font-size:20px;"></i>
                    </div>
                    <el-row>
                        <el-col v-for="(item,index) in configList.personInfo"
                                :key="'personInfo'+index"
                                :xs="24"
                                :sm="{span:index === 2?12:6}"
                                :md="{span:index === 2?12:6}"
                                :lg="{span:index === 2?12:6}"
                                :xl="{span:index === 2?12:6}"
                                style="font-size:16px;">
                            <div class="athwart-text"
                                 style="border:1px solid #E8E8E8;margin:10px;height:100px;">
                                <div class="flex-text">
                                    <div style="font-size:14px; color: rgba(0, 0, 0, 0.45);flex-shrik:1;">{{item.title}}</div>
                                    <div style="font-size:20px;font-weight:500;margin:10px 0 20px;word-break:break-all;line-height:1;">{{item.target}}</div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <div>
                        <el-button class="button-sl">账户详细资料</el-button>
                    </div>
                </el-card>

                <el-card style="font-size:14px;margin-top:20px;">
                    <div slot="header"
                         class="clearfix">
                        <span class="bor">ID:{{'TQXQewAcVcXYrYJigerv9NizPPiUtWGq9P'}}</span>
                        <span style="font-size:14PX;color:#5b3b98;font-weight:500;">{{'0'}} TRX</span>
                    </div>
                    <el-form class="ff-items">
                        <el-row>
                            <el-col :xs="12"
                                    :sm="8"
                                    :md="8"
                                    :lg="5"
                                    :xl="5">
                                <el-form-item>
                                    <div class="athwart-text"
                                         style="border:1px solid #E8E8E8;margin:5px 5px 0;padding-bottom:5px;">
                                        <div class="flex-text"
                                             style="position:relative;"
                                             v-for="(item,index) in configList.owns.slice(4)"
                                             :key="index">
                                            <div class="title-content">{{item.title}}</div>
                                            <div style="font-size:14px; color: rgba(0, 0, 0, 0.45);flex-shrik:1;margin-top:.5em;">{{item.content}}</div>
                                            <div style="font-size:20px;font-weight:500;margin:10px 0 20px;word-break:break-all;line-height:1;">{{item.amount}}</div>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col v-for="(item,index) in configList.owns.slice(0,4)"
                                    :key="index"
                                    :xs="12"
                                    :sm="8"
                                    :md="8"
                                    :lg="5"
                                    :xl="5">
                                <el-form-item>
                                    <div class="athwart-text"
                                         style="border:1px solid #E8E8E8;margin:5px 5px 0 0;">
                                        <div v-if="item.title"
                                             class="title-content">{{item.title}}</div>
                                        <div class="flex-text" :style="{'margin-top':item.title&&'1em'}">
                                            <div style="font-size:14px; color: rgba(0, 0, 0, 0.45);flex-shrik:1;">{{item.content}}</div>
                                            <div style="font-size:20px;font-weight:500;margin:10px 0 20px;word-break:break-all;line-height:1;">{{item.amount}}</div>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <el-divider></el-divider>
                    <div>
                        <el-button round
                                   style="padding:10px 60px">账户详情</el-button>
                    </div>
                </el-card>
            </div>
        </el-col>
    </navigation>
</template>
<script>
export default {
    data () {
        return {
            Obj: {
                sponsorAddr: '',
                amount: 0
            },
            configList: {
                combo: [ 1000, 5000, 15000, 50000, 100000 ],
                communitys: [
                    { icon: '/static/img/users.png', title: '总社区人数', amount: '1000' },
                    { icon: '/static/img/charts.png', title: '总投入额(TRX)', amount: '1000' },
                    { icon: '/static/img/money.png', title: '总提现额(TRX)', amount: '1000' },
                    { title: '保险池金额(TRX)', amount: '1000', render: `` },
                    { title: '当日可奖励基金(TRX)', amount: '1000' },
                ],
                personInfo: [
                    { title: '总存款(TRX)', target: '1000TRX' },
                    { title: '总提现(TRX)', target: '1000TRX' },
                    { title: '由...推荐', target: 'TPSBdMAypzoBky8utSnXxREmR51dWGiLvH' },
                ],
                owns: [
                    { content: '赞助收入(TRX)', title: '会员级别', amount: 500.00 },
                    { content: '钱包余额(TRX)', title: '可用总数', amount: 93.00 },
                    { content: '日榜奖励收入(TRX)', amount: 93.78 },
                    { content: '保险补贴收入(TRX)', amount: 358.00 },
                    { title: '社区层面', content: '上线收入(TRX)', amount: 2026873.14 },
                    { title: '', content: '下线收入(TRX)', amount: 2026873.14 },
                ],
                withdrawal: []
            }
        }
    },
    methods: {
        onclickTRX (amount) {
            this.Obj.amount = amount
            console.log(this.Obj.amount)
        },
        transform (i, type) {
            console.log(i)
            if (type === 'color') {
                const obj = [ '#8543F4,#C3A2FA', '#FE7641,#FFFFFF', '#0BE1E0,#8AF1F0,#FFFFFF' ]
                console.log(`linear-gradient(to left,${obj[ 0 ]})`)
                return `linear-gradient(to left,${obj[ i ]})`
            }
        }
    },
    mounted () {
        console.log(this)
    },
};
</script>
<style lang="scss" scoped>
.mark {
    background: #220d7c;
    height: 200px;
    width: 100%;
    position: absolute;
    z-index: -1;
    margin: 0 -10px;
}
.body-content {
    width: 100%;
    margin-top: 30px;
    .clearfix {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        .bor {
            font-weight: 500;
            display: flex;
            align-items: center;
            color: #5b3b98;
            font-size: 14px;
            max-width: 70%;
            word-break: break-all;
            text-align: left;
            line-height: 1;

            &::before {
                margin-right: 10px;
                content: "";
                width: 5px;
                height: 20px;
                border-radius: 5px;
                background-image: linear-gradient(to top, #593ebf, #9b40a6);
            }
        }
    }
    .ff-items {
        ::v-deep.el-form-item {
            margin-bottom: 0;
            box-sizing: border-box;
        }
    }
    .athwart-text {
        position: relative;
        .el-text {
            transform: translateY(-0.5em);
            position: absolute;
            z-index: 99;
            left: 20px;
            padding: 0 15px;
            background: #fff;
            font-weight: 500;
            top: 0;
            line-height: 1;
        }
        ::v-deep.el-textarea__inner {
            padding: 20px 10px;
        }

        .devire {
            width: 100%;
            height: 2px;
            position: absolute;
            top: 0;
        }

        .title-content {
            position: absolute;
            top: 0;
            width: 100%;
            left: 0;
            line-height: 1;
            height: 2em;
            display: flex;
            align-items: center;
            text-indent: 1em;
            font-weight: 500;
        }
    }
    .flex-text {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 10px;
        box-sizing: border-box;

        ::v-deep.el-divider--horizontal {
            margin: 15px 0;
        }
    }
    .aa-border {
        border: 1px solid #d9d9d9;
        margin: 24px 0;
        padding: 24px 0 4px;

        ::v-deep.el-button:focus,
        .el-button:hover {
            background-color: transparent;
        }
    }
    .tapStyle {
        color: #fff;
        background-image: linear-gradient(to left, #fc7342, #9447c2);
        border: 1px solid transparent;
        box-sizing: border-box;
    }

    .button-sl {
        padding: 12px 80px;
        color: #fff;
        background-image: linear-gradient(to left, #593ebf, #9b40a6, #9b40a6);
    }
}
</style>

