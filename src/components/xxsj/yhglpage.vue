<template>
  <div class="brgl-container">
    <div class="search-row">
      <div class="addmedicine">
        <el-button type="primary" class="button-size" @click="showCreate">添加用户</el-button>
      </div>
    </div>
    <div class="table-continer">
      <el-table
        :data="userlist"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="border:1px solid #ebeef5;overflow-y:auto;">
        <el-table-column
          type="index"
          label="序号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          sortable
          width="400">
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="姓名"
          sortable
          width="320">
        </el-table-column>
        <el-table-column
          label="角色"
          sortable
          prop="role"
          width="300">
          <template slot-scope="scope">
            {{scope.row.role === 1 ? "管理员" : (scope.row.role === 2 ? "高级用户" : "普通用户")}}
          </template>
        </el-table-column>
        <el-table-column
          label="管理"
          width="600">
          <template slot-scope="scope">
            <el-button @click="showUpdate(scope.$index)" type="text" class="btn-font-default bnt-font-color">修改</el-button>
            <el-button @click="removeUser(scope.$index)" type="text" class="btn-font-default bnt-font-color">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" class="add-user">
      <el-form class="small-space" :model="tempUser" label-position="left" label-width="150px" size="medium"
               style='width: 600px; margin-left:50px;font-size: 30px'>
        <el-form-item label="用户名" required v-if="dialogStatus=='create'" >
          <el-input type="text" v-model="tempUser.username" width="350px">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" v-if="dialogStatus=='create'" required>
          <el-input type="password" v-model="tempUser.password">
          </el-input>
        </el-form-item>
        <el-form-item label="新密码" v-else>
          <el-input type="password" v-model="tempUser.password" placeholder="不填则表示不修改">
          </el-input>
        </el-form-item>
        <el-form-item label="角色" required>
          <el-select v-model="tempUser.role" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" required>
          <el-input type="text" v-model="tempUser.nickname">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="success" @click="createUser">创 建</el-button>
        <el-button type="primary" v-else @click="updateUser">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style>
  .el-form-item__label{
    font-size: 30px;
  }
  .el-dialog__title {
    line-height: 30px;
    font-size: 40px;
    color: #303133;
  }
  .el-button--default{
    width: 150px;
    height: 60px;
    font-size: 30px;
  }
  .el-button--success{
    width: 150px;
    height: 60px;
    font-size: 30px;
    background-color: #3a8ee6;
  }
  .el-button--primary{
    width: 150px;
    height: 60px;
    font-size: 30px;
    background-color: #3a8ee6;
  }
  .el-select-dropdown__item{
    font-size: 20px;
  }
  .el-input__inner{
    width: 300px;
  }
</style>
<style lang="scss">
  @import '../../assets/css/ypglpage.scss';
</style>

<script>
  export default {
    data() {
      return {
        totalCount: 0, //分页组件--数据总条数
        userlist: [],//表格的数据
        listLoading: false,//数据加载等待动画
        listQuery: {
          pageNum: 1,//页码
          pageRow: 50,//每页条数
        },
        dialogStatus: 'create',
        dialogFormVisible: false,
        textMap: {
          update: '修改用户',
          create: '新建用户'
        },
        tempUser:{
          username:'',
          nickname:'',
          password:'',
          role:'',
        },
        options:[{
          value:2,
          label:'高级用户',
        },{
          value:3,
          label:'普通用户',
        }]
      }
    },
    created () {
      //获取页面的初始化数据
      document.title = '用户管理'
      this.getusers()
    },
    methods: {
      getusers(){
        this.$http.get(
          '/userManage/getUserList')
          .then(response =>{
            if(response.code == 1){
              this.userlist = response.data.userlist
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      createUser() {
        this.$http.post(
          '/userManage/addUser',{
            username: this.tempUser.username,
            password: this.tempUser.password,
            nickname: this.tempUser.nickname,
            role : this.tempUser.role
          })
          .then(response =>{
            if(response.code == 1){
              this.dialogFormVisible = false
              this.getusers()
            }
            else {
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      updateUser() {
        //修改用户信息
        this.$http.post('/userManage/updateUser',{
          username: this.tempUser.username,
          password: this.tempUser.password,
          nickname: this.tempUser.nickname,
          role : this.tempUser.role
        }).then(response => {
          if(response.code == 1){
            this.dialogFormVisible = false
            this.getusers()
          }else {}
        })
          .catch(function (error) {
            console.log(error);
          })
      },
      showUpdate($index) {
        let user = this.userlist[$index];
        this.tempUser.username = user.username;
        this.tempUser.nickname = user.nickname;
        this.tempUser.role = user.role;
        this.tempUser.password = '';
        this.dialogStatus = "update"
        this.dialogFormVisible = true
      },
      showCreate() {
        //显示新增对话框
        this.tempUser.username = "";
        this.tempUser.password = "";
        this.tempUser.nickname = "";
        this.tempUser.roleId = "";
        this.tempUser.userId = "";
        this.dialogStatus = "create"
        this.dialogFormVisible = true
      },
      removeUser($index) {
        this.$confirm('确定删除此用户?', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        }).then(() => {
          let user = this.userlist[$index];
          user.deleteStatus = '2';
          this.$http.delete('/userManage/deleteUser',{
            params:{
              username: user.username
            }
          }).then(response => {
            if(response.code == 1){
              this.getusers()
            }
          }).catch(() => {
            this.$message.error("删除失败")
          })
        })
      },
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleClick(row) {
        console.log(row);
      },
      //初始化当前组件
      opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
      },

    }
  }

</script>
