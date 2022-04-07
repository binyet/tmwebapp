<template>
  <div id="Index">
    <el-table :data="items">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="账号" prop="userAccount"></el-table-column>
      <el-table-column label="用户名" prop="userName"></el-table-column>
      <el-table-column label="密码" prop="password"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
import { TMApiClient } from "../../services/TMApiClient";
@Component
export default class Index extends Vue {
  private userClient: TMApiClient.UserClient;
  private items: TMApiClient.GetUserModel[];
  private totalCount: number;
  private pageSize: number;
  private currentPage: number;
  constructor() {
    super();
    this.userClient = new TMApiClient.UserClient(undefined, axios);
    this.items = [];
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalCount = 0;
  }

  private async mounted(): Promise<void>{
      var result = await this.userClient.getPage(10, 1);
      this.items = result.items;
      this.totalCount = result.count;
  }

  private async handleSizeChange(): Promise<void>{

  }
  private async handleCurrentChange(): Promise<void>{

  }

}
</script>
<style scoped lang="scss"></style>
