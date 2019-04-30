<template>
  <lay-admin>
    <lay-side>
      <lay-menu :default-openeds="[0, 1, 2]">
        <lay-menu-item
          :index="0"
          icon="component"
          title="快速开始"
        >
          <lay-menu-child-item title="首页"></lay-menu-child-item>
          <lay-menu-child-item title="关于"></lay-menu-child-item>
        </lay-menu-item>
      </lay-menu>
    </lay-side>
    <section>
      <lay-header>
        <lau-logo>
          <img
            width="30"
            src="https://cos.jskou.com/vue-layui-logo.png"
          >
          <span style="margin-left: 5px">vue-layui</span>
        </lau-logo>
        <lay-menu
          mode="horizontal"
          class="layui-layout-left"
        >
          <lay-menu-item :index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
            <lay-menu-child-item title="基本资料" />
            <lay-menu-child-item title="安全设置" />
          </lay-menu-item>
          <lay-menu-item :index="2">
            <template slot="title">
              <span>导航一</span>
            </template>
          </lay-menu-item>
        </lay-menu>
        <lay-menu
          mode="horizontal"
          class="layui-layout-right"
        >
          <lay-menu-item :index="0">
            <template slot="title">
              <img
                src="https://avatars1.githubusercontent.com/u/23720738?s=460&v=4"
                class="layui-nav-img"
              >
              admin
            </template>
            <lay-menu-child-item title="基本资料" />
            <lay-menu-child-item title="安全设置" />
          </lay-menu-item>
          <lay-menu-item :index="0">
            <template slot="title">
              退出
            </template>
          </lay-menu-item>
        </lay-menu>
      </lay-header>
      <lay-body>
        <div class="layui-main site-demo-body">
          <router-view />
        </div>
      </lay-body>
      <lay-footer style="text-align: center">
        <span>© 2018</span>
        <a
          class="deom-pl10"
          href="http://jskou.com"
          target="_blank"
        >jskou.com</a>
        <span class="deom-pl10">MIT license</span>
        <a
          class="deom-pl10"
          href="https://github.com/kouchao/vue-layui"
          target="_blank"
        >GitHub</a>
        <a
          class="deom-pl10"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37078202000111"
          target="_blank"
        >鲁公网安备 37078202000111号</a>
        <span class="deom-pl10">|</span>
        <a
          class="deom-pl10"
          href="http://www.miibeian.gov.cn/"
          target="_blank"
        >鲁ICP备17028069号-2</a>
      </lay-footer>
    </section>
  </lay-admin>
</template>

<script>
export default {
  data () {
    return {
      collapse: true
    }
  }
}
</script>

<style>
.layui-layout-admin .site-demo-body {
  top: 30px;
}
.deom-pl10 {
  margin-left: 10px;
}
.layui-layout-left {
  transition: 0.5s;
}
table.table {
  display: block;
  width: 100%;
  background-color: #fff;
  color: #5e6d82;
  font-size: 14px;
  border-collapse: collapse;
  overflow: auto;
  margin-bottom: 50px;
}
table.table td,
table.table th {
  border-top: 1px solid #f3f7fa;
  border-bottom: 1px solid #f3f7fa;
  padding: 10px 8px;
}
code.code_inline {
  padding: 0.3em 0.5em;
  font-size: 0.9em;
  vertical-align: middle;
  border: 1px solid #ececec;
  border-radius: 2px;
  background-color: #f7f7f7;
}
</style>
