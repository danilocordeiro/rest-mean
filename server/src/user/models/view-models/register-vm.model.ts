import { ApiModelPropertyOptional } from "@nestjs/swagger";
import { LoginVm } from "./login-vm.model";

export class RegistertVm extends LoginVm {
  @ApiModelPropertyOptional() firstName?: string;
  @ApiModelPropertyOptional() lastName?: string;
}