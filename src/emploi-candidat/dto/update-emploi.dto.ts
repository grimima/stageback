import { PartialType } from "@nestjs/mapped-types";
import { CreateEmploiDto } from "./create-emploi.dto";

export class UpdateEmploiDTO extends PartialType(CreateEmploiDto){}