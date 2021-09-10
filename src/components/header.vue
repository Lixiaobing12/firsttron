<template>
    <el-row :gutter="24">
        <el-col :span="24">
            <el-row type="flex"
                    style="align-items:center;">
                <el-col :xs="7"
                        :sm="12"
                        :md="8"
                        :lg="9"
                        :xl="11"
                        :offset="1">
                    <div class="grid-content bg-purple"
                         style="display:flex">
                        <el-image src="https://my.firsttron.com/img/logo_text.png"
                                  style="width:250px;">firsticon</el-image>
                    </div>
                </el-col>
                <el-col :xs="16"
                        :sm="12"
                        :md="16"
                        :lg="15"
                        :xl="13">
                    <div class="grid-content bg-purple-light">
                        <nav class="nav">
                            <a href="#">首页</a>
                            <a href="#">关于我们</a>
                            <a href="#">发展</a>
                            <a href="#">FAQ</a>
                            <a href="#">计划</a>
                            <a href="#">怎么开始</a>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    语言切换<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>English</el-dropdown-item>
                                    <el-dropdown-item>中文</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            <el-button type="success">Join IN</el-button>
                        </nav>
                        <div class="overwidth">
                            <el-button type="success">Join IN</el-button>
                            <i class="el-icon-s-fold"
                               style="font-size:32px;"
                               @click="todo"></i>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="24"
                style="position:relative;padding:0;">
            <ul class="hidecol">
                <li>首页</li>
                <li>关于我们</li>
                <li>发展</li>
                <li>FAQ</li>
                <li>计划</li>
                <li>怎么开始</li>
                <li style="position:relative;">
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            语言切换<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>English</el-dropdown-item>
                            <el-dropdown-item>中文</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
            <el-row type="flex"
                    justify="center"
                    class="transf">
                <slot></slot>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
    methods: {
        todo (status) {
            this.$nextTick(() => {
                const { style: tr_style } = document.querySelector('.transf')
                const hielement = document.querySelector('.hidecol')
                if (typeof status === 'boolean' && status) {
                    hielement.style.opacity = '0'
                    tr_style.transform = ''
                } else {
                    if (hielement.style.opacity === '1') {
                        hielement.style.opacity = '0'
                    } else {
                        hielement.style.opacity = '1'
                    }
                    const hi_height = hielement.clientHeight
                    tr_style.transform = tr_style.transform ? '' : `translateY(${hi_height + 20}px)`
                }
            })
        }
    },
    mounted () {
        let timer
        let status = true
        window.onresize = (event) => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                console.log(event.target.innerWidth, status)
                if (event.target.innerWidth > 810) {
                    if (status) {
                        this.todo(true)
                        status = false
                    }
                } else {
                    if (!status) {
                        this.todo(true)
                        status = true
                    }
                }
            }, 500)
        }
        console.log(this.$t("me"))
    },
};
</script>
<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin-left: 30%;
    a {
        color: #333;
        text-decoration: none;
        font-size: 13px;
    }
}
.overwidth {
    display: none;
}
.transf {
    transition: transform 1s ease;
    position: relative;
}

.hidecol {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    list-style: none;
    text-align: left;
    font-size: 14px;
    background: #fff;
    padding: 0;
    transition: opacity 1s ease;
    li {
        border-bottom: 1px solid #f5f5f5;
        padding: 12px 60px;
        &:active {
            color: #6d2de7;
        }
        &:hover {
            color: #6d2de7;
            background: #f5f5f5;
        }
    }
}
@media screen and (max-width: 800px) {
    .nav {
        display: none;
    }
    .overwidth {
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
        width: 0;
        width: 100%;
    }
}

.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #333;
    font-size: 13px;
}
.el-icon-arrow-down {
}
.demonstration {
    display: block;
    color: #8492a6;
    margin-bottom: 20px;
}
</style>
