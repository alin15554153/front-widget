<template>
  <div id="navigation" :class="classObj" class="app-wrapper">
    <el-scrollbar class="sidebar-container" wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div class="menu-wrapper">
          <template>
            <app-link to="/">
              <el-menu-item index="4" class="submenu-title-noDropdown">
                <i class="el-icon-menu" />
                <span slot="title">导航三</span>
              </el-menu-item>
            </app-link>
          </template>
        </div>
        <div class="menu-wrapper">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu" />
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              选项1
            </el-menu-item>
            <el-menu-item index="1-2">
              选项2
            </el-menu-item>
            <el-submenu index="1-3">
              <template slot="title">
                选项3
              </template>
              <el-menu-item index="1-3-1">
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </div>
        <div class="menu-wrapper">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu" />
              <span>导航二</span>
            </template>
            <el-menu-item index="2-1">
              选项1
            </el-menu-item>
            <el-menu-item index="2-2">
              选项2
            </el-menu-item>
            <el-submenu index="2-3">
              <template slot="title">
                选项3
              </template>
              <el-menu-item index="2-3-1">
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </div>
      </el-menu>
    </el-scrollbar>
    <div class="main-container">
      <el-button @click="onclick">
        默认按钮
      </el-button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Navigation',
    data() {
      return {
        isCollapse: false,
        classObj: {
            hideSidebar: false,
            openSidebar: true,
            withoutAnimation: false
        }
      }
    },
    computed: {

    },
    methods: {
      onclick() {
        this.isCollapse = !this.isCollapse
        this.classObj.hideSidebar = !this.classObj.hideSidebar
        this.classObj.openSidebar = !this.classObj.openSidebar
      }
    }
  }
</script>

<style lang="scss">
  $sideBarWidth: 193px;
  $hideSidebarWidth: 38px;
  @mixin clearfix {
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
  body {
    margin: 0;
  }
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.hideSidebar {
      .sidebar-container {
        width: 36px !important;
      }

      .main-container {
        margin-left: 36px;
      }

      .submenu-title-noDropdown {
        padding-left: 5px !important;
        position: relative;
        .el-tooltip {
          padding: 0 5px !important;
        }
      }
      .el-submenu {
        overflow: hidden;
        &>.el-submenu__title {
          padding-left: 5px !important;
          .el-submenu__icon-arrow {
            display: none;
          }
        }
      }
      .el-menu--collapse {
        .el-submenu {
          &>.el-submenu__title {
            &>span {
              height: 0;
              width: 0;
              overflow: hidden;
              visibility: hidden;
              display: inline-block;
            }
          }
        }
      }
    }
    // 侧边栏
    .sidebar-container {
      transition: width 0.28s;
      width: 195px !important;
      height: 100%;
      position: fixed;
      font-size: 0px;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      //reset element-ui css
      .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
      }

      .scrollbar-wrapper {
        overflow-x: hidden!important;
        .el-scrollbar__view {
          height: 100%;
          .el-menu {
            border: none;
            height: 100%;
            width: 100% !important;
          }
        }
        .el-scrollbar__bar{
          &.is-vertical{
            right: 0px;
          }
          &.is-horizontal {
            display: none;
          }
        }
      }
    }
    .main-container {
      min-height: 100%;
      transition: margin-left .28s;
      margin-left: 195px;
      position: relative;
    }
  }

</style>
