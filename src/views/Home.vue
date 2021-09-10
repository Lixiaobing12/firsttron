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
                        <span>现在加入</span>
                        <el-button style="float: right; padding: 3px 0"
                                   type="text">0xsdfa123123wewer123123</el-button>
                    </div>
                    <el-row>
                        <el-col v-for="item in configList.combo"
                                :key="item"
                                :xs="12"
                                :sm="8"
                                :md="6"
                                :lg="6"
                                :xl="6"
                                style="margin:5px 0;font-size:16px;">
                            <el-button round
                                       style="width:80%;">{{item}}TRX</el-button>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <div>
                        <el-button round
                                   style="padding:10px 60px">加入</el-button>
                    </div>
                </el-card>
                <el-card style="font-size:14px;margin-top:20px;background:#7d6ace;">
                    <el-row>
                        <el-col v-for="(item,index) in configList.communitys"
                                :key="index"
                                :xs="24"
                                :sm="12"
                                :md="8"
                                :lg="6"
                                :xl="6"
                                style="margin:5px 0;font-size:16px;background:#7d6ace;">
                            <div>
                                <i :class="item.icon"></i>
                                <div>{{item.title}}</div>
                                <div>{{item.amount}}</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card style="font-size:14px;margin-top:20px;">
                    <div slot="header"
                         class="clearfix">
                        <span>个人资料</span>
                        <i class="el-icon-refresh" style="font-size:30px;"></i>
                    </div>
                    <el-row>
                        <el-col v-for="(item,index) in configList.personInfo"
                                :key="index"
                                :xs="24"
                                :sm="8"
                                :md="8"
                                :lg="8"
                                :xl="8"
                                :offset="1"
                                style="margin:5px 0;font-size:16px;margin:10px 0;">
                            <div style="padding:20px;border:1px solid #999;box-sizing:border-box;margin-left:10px;overflow:hidden;">{{item.target}}</div>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <div>
                        <el-button round
                                   style="padding:10px 60px">账户详情</el-button>
                    </div>
                </el-card>
                <el-card style="font-size:14px;margin-top:20px;">
                    <div slot="header"
                         class="clearfix">
                        <span>ID:{{}}</span>
                        <i class="el-icon-refresh" style="font-size:30px;"></i>
                    </div>
                    <el-row>
                        <el-col v-for="(item,index) in configList.personInfo"
                                :key="index"
                                :xs="24"
                                :sm="8"
                                :md="8"
                                :lg="8"
                                :xl="8"
                                :offset="1"
                                style="margin:5px 0;font-size:16px;margin:10px 0;">
                            <div style="padding:20px;border:1px solid #999;box-sizing:border-box;margin-left:10px;overflow:hidden;">{{item.target}}</div>
                        </el-col>
                    </el-row>
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
            configList: {
                combo: [ 1000, 5000, 15000, 50000, 100000 ],
                communitys: [
                    { icon: 'el-icon-info', title: '总社区人数', amount: '1000' },
                    { icon: 'el-icon-info', title: '总投入额', amount: '1000' },
                    { icon: 'el-icon-info', title: '总提现额', amount: '1000' },
                    { icon: 'el-icon-info', title: '保险池子', amount: '1000' },
                    { icon: 'el-icon-info', title: '当日奖励池', amount: '1000' },
                ],
                personInfo:[
                    { title: '总存款', target: '1000TRX' },
                    { title: '总提现', target: '1000TRX' },
                    { title: '推荐', target: '0xsdfa123123wewer123123' },
                ],
                withdrawal:[]
            }
        }
    },
    methods: {
    },
    mounted () {
        console.log(this.$t("me"))
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
        span {
            font-weight: 500;
        }
    }
}
</style>

