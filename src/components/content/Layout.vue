<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="250px" style="background-color: rgb(39 123 154)">
            <el-menu
                    :default-active="this.$route.path"
                    class="el-menu-vertical-demo"
                    background-color="rgb(39 123 154)"
                    text-color="#fff"
                    @open="handleOpen"
                    @close="handleClose"
                    active-text-color="#ffd04b"
                    router>
				<el-menu-item index="/home">
				    <i class="el-icon-sort"></i>
				    <span slot="title">Home</span>
				</el-menu-item>
                <el-menu-item index="/ranking">
                    <i class="el-icon-receiving"></i>
                    <span slot="title">Ranking</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<script>

    export default {
        name: "Layout",
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        },
    }
</script>

<style>
    .el-aside {
        color: rgb(39 123 154);
    }
    .el-menu {
        border-right: 0px;
    }

</style>