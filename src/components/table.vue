<style scoped>
.top-row-box {
  padding: 0 0 15px 0;
}
</style>

<template>
  <div>
    <el-row class="top-row-box">
      <el-button
        type="primary"
        @click="add('formAdd')"
      >添加数据</el-button>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
      >
        <template slot-scope="scope">
          {{scope.row.sex=='male'?'男':'女'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
      ></el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="edit(scope.row,scope.$index)"
          >编辑</el-button>
          <el-button
            type="text"
            size="small"
            @click="del(scope.row,scope.$index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--添加弹框s-->
    <el-dialog
      title="提示"
      :visible.sync="fromAddVisible"
    >
      <el-form
        label-width="80px"
        :model="formAdd"
        :rules="rules"
        ref="formAdd"
      >
        <el-form-item
          label="姓名"
          prop="name"
        >
          <el-input
            v-model="formAdd.name"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="formAdd.sex">
            <el-radio
              label="male"
              value="male"
            >男</el-radio>
            <el-radio
              label="female"
              value="female"
            >女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="地址"
          prop="address"
        >
          <el-input v-model="formAdd.address"></el-input>
        </el-form-item>
        <el-form-item
          label="电话"
          prop="phone"
        >
          <el-input v-model="formAdd.phone"></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email"
        >
          <el-input v-model="formAdd.email"></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="success"
          @click="save('formAdd')"
        >保存</el-button>
        <el-button @click="fromAddVisible = false">关闭</el-button>
      </div>
    </el-dialog>
    <!--添加弹框e-->
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import { TABLE_LIST, TABLE_RULE } from './interface';
@Component({
  components: {}
})
export default class Table extends Vue {
  fromAddVisible: boolean = false;
  isEdit: boolean = false;
  editIndex: number = 0;
  formAdd: TABLE_LIST = {
    name: '',
    sex: 'male',
    address: '',
    phone: '',
    email: ''
  };
  tableData: Array<TABLE_LIST> = [];
  rules: TABLE_RULE = {
    name: [{ required: true, message: '请填写姓名' }],
    address: [{ required: true, message: '请填写地址' }],
    phone: [{ required: true, message: '请填写电话' }],
    email: [{ required: true, type: 'email', message: '请输入正确的邮箱地址' }]
  };
  created() {
    getTableList(this);
  }
  add(formName: string) {
    let _this = this;
    _this.isEdit = false;
    if (_this.$refs[formName]) {
      let el: any = _this.$refs[formName];
      el.resetFields();
    }
    _this.fromAddVisible = true;
    _this.formAdd.name = '';
    _this.formAdd.sex = 'male';
    _this.formAdd.address = '';
    _this.formAdd.phone = '';
    _this.formAdd.email = '';
  }
  edit(item, _index) {
    let _this = this;
    _this.isEdit = true;
    _this.editIndex = _index;
    _this.fromAddVisible = true;
    _this.formAdd.name = item.name;
    _this.formAdd.sex = item.sex;
    _this.formAdd.address = item.address;
    _this.formAdd.phone = item.phone;
    _this.formAdd.email = item.email;
  }
  del(item, _index) {
    let _this: any = this;
    _this
      .$confirm('确定删除吗', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(function() {
        _this.tableData.splice(_index, 1);
      })
      .catch(function() {});
  }
  save(formName: string) {
    let _this = this;
    let params = {
      name: _this.formAdd.name,
      sex: _this.formAdd.sex,
      address: _this.formAdd.address,
      phone: _this.formAdd.phone,
      email: _this.formAdd.email,
      id: null
    };
    let el: any = _this.$refs[formName];
    el.validate(function(valid) {
      if (!valid) {
        return false;
      } else {
        if (_this.isEdit) {
          params.id = _this.tableData[_this.editIndex].id;
          _this.tableData.splice(_this.editIndex, 1, params);
        } else {
          params.id = _this.tableData.length + 1;
          _this.tableData.push(params);
        }
        _this.fromAddVisible = false;
      }
    });
  }
}
function getTableList(_this) {
  _this.axios('get', 'static/jsonData/table.json', {}, function(response) {
    // console.log(response);
    _this.tableData = response.data;
  });
}
</script>
