export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type Offer = {
  __typename?: "Offer"
  id: Scalars["ID"]
  expirationInDays?: Maybe<Scalars["Int"]>
  experienceAt?: Maybe<Scalars["DateTime"]>
  dealValue?: Maybe<Scalars["Float"]>
  comment?: Maybe<Scalars["String"]>
  paymentType?: Maybe<OfferPaymentTypeType>
  owner?: Maybe<User>
  receivers?: Maybe<Array<User>>
  receiversCount?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  dealType?: Maybe<OfferDealTypeType>
}

export type OfferReceiversArgs = {
  where?: UserWhereInput
  orderBy?: Array<UserOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<UserWhereUniqueInput>
}

export type OfferReceiversCountArgs = {
  where?: UserWhereInput
}

export enum OfferPaymentTypeType {
  BankTransfer = "BANK_TRANSFER",
  BuymePoints = "BUYME_POINTS",
  Donate = "DONATE"
}

export enum OfferDealTypeType {
  Percentage = "PERCENTAGE",
  Fixed = "FIXED"
}

export type OfferWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type OfferWhereInput = {
  AND?: Maybe<Array<OfferWhereInput>>
  OR?: Maybe<Array<OfferWhereInput>>
  NOT?: Maybe<Array<OfferWhereInput>>
  id?: Maybe<IdFilter>
  expirationInDays?: Maybe<IntFilter>
  experienceAt?: Maybe<DateTimeNullableFilter>
  dealValue?: Maybe<FloatFilter>
  comment?: Maybe<StringFilter>
  paymentType?: Maybe<OfferPaymentTypeTypeNullableFilter>
  owner?: Maybe<UserWhereInput>
  receivers?: Maybe<UserManyRelationFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  dealType?: Maybe<OfferDealTypeTypeNullableFilter>
}

export type IdFilter = {
  equals?: Maybe<Scalars["ID"]>
  in?: Maybe<Array<Scalars["ID"]>>
  notIn?: Maybe<Array<Scalars["ID"]>>
  lt?: Maybe<Scalars["ID"]>
  lte?: Maybe<Scalars["ID"]>
  gt?: Maybe<Scalars["ID"]>
  gte?: Maybe<Scalars["ID"]>
  not?: Maybe<IdFilter>
}

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Scalars["Int"]>>
  notIn?: Maybe<Array<Scalars["Int"]>>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  not?: Maybe<IntFilter>
}

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars["DateTime"]>
  in?: Maybe<Array<Scalars["DateTime"]>>
  notIn?: Maybe<Array<Scalars["DateTime"]>>
  lt?: Maybe<Scalars["DateTime"]>
  lte?: Maybe<Scalars["DateTime"]>
  gt?: Maybe<Scalars["DateTime"]>
  gte?: Maybe<Scalars["DateTime"]>
  not?: Maybe<DateTimeNullableFilter>
}

export type FloatFilter = {
  equals?: Maybe<Scalars["Float"]>
  in?: Maybe<Array<Scalars["Float"]>>
  notIn?: Maybe<Array<Scalars["Float"]>>
  lt?: Maybe<Scalars["Float"]>
  lte?: Maybe<Scalars["Float"]>
  gt?: Maybe<Scalars["Float"]>
  gte?: Maybe<Scalars["Float"]>
  not?: Maybe<FloatFilter>
}

export type StringFilter = {
  equals?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  notIn?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  contains?: Maybe<Scalars["String"]>
  startsWith?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringFilter>
}

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive"
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  notIn?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  contains?: Maybe<Scalars["String"]>
  startsWith?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringFilter>
}

export type OfferPaymentTypeTypeNullableFilter = {
  equals?: Maybe<OfferPaymentTypeType>
  in?: Maybe<Array<OfferPaymentTypeType>>
  notIn?: Maybe<Array<OfferPaymentTypeType>>
  not?: Maybe<OfferPaymentTypeTypeNullableFilter>
}

export type UserManyRelationFilter = {
  every?: Maybe<UserWhereInput>
  some?: Maybe<UserWhereInput>
  none?: Maybe<UserWhereInput>
}

export type OfferDealTypeTypeNullableFilter = {
  equals?: Maybe<OfferDealTypeType>
  in?: Maybe<Array<OfferDealTypeType>>
  notIn?: Maybe<Array<OfferDealTypeType>>
  not?: Maybe<OfferDealTypeTypeNullableFilter>
}

export type OfferOrderByInput = {
  id?: Maybe<OrderDirection>
  expirationInDays?: Maybe<OrderDirection>
  experienceAt?: Maybe<OrderDirection>
  dealValue?: Maybe<OrderDirection>
  comment?: Maybe<OrderDirection>
  paymentType?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  dealType?: Maybe<OrderDirection>
}

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc"
}

export type OfferUpdateInput = {
  expirationInDays?: Maybe<Scalars["Int"]>
  experienceAt?: Maybe<Scalars["DateTime"]>
  dealValue?: Maybe<Scalars["Float"]>
  comment?: Maybe<Scalars["String"]>
  paymentType?: Maybe<OfferPaymentTypeType>
  owner?: Maybe<UserRelateToOneForUpdateInput>
  receivers?: Maybe<UserRelateToManyForUpdateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  dealType?: Maybe<OfferDealTypeType>
}

export type UserRelateToOneForUpdateInput = {
  create?: Maybe<UserCreateInput>
  connect?: Maybe<UserWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type UserRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<UserWhereUniqueInput>>
  set?: Maybe<Array<UserWhereUniqueInput>>
  create?: Maybe<Array<UserCreateInput>>
  connect?: Maybe<Array<UserWhereUniqueInput>>
}

export type OfferUpdateArgs = {
  where: OfferWhereUniqueInput
  data: OfferUpdateInput
}

export type OfferCreateInput = {
  expirationInDays?: Maybe<Scalars["Int"]>
  experienceAt?: Maybe<Scalars["DateTime"]>
  dealValue?: Maybe<Scalars["Float"]>
  comment?: Maybe<Scalars["String"]>
  paymentType?: Maybe<OfferPaymentTypeType>
  owner?: Maybe<UserRelateToOneForCreateInput>
  receivers?: Maybe<UserRelateToManyForCreateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  dealType?: Maybe<OfferDealTypeType>
}

export type UserRelateToOneForCreateInput = {
  create?: Maybe<UserCreateInput>
  connect?: Maybe<UserWhereUniqueInput>
}

export type UserRelateToManyForCreateInput = {
  create?: Maybe<Array<UserCreateInput>>
  connect?: Maybe<Array<UserWhereUniqueInput>>
}

export type Bank = {
  __typename?: "Bank"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  bankId?: Maybe<Scalars["Int"]>
}

export type BankWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type BankWhereInput = {
  AND?: Maybe<Array<BankWhereInput>>
  OR?: Maybe<Array<BankWhereInput>>
  NOT?: Maybe<Array<BankWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  bankId?: Maybe<IntFilter>
}

export type BankOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  bankId?: Maybe<OrderDirection>
}

export type BankUpdateInput = {
  name?: Maybe<Scalars["String"]>
  bankId?: Maybe<Scalars["Int"]>
}

export type BankUpdateArgs = {
  where: BankWhereUniqueInput
  data: BankUpdateInput
}

export type BankCreateInput = {
  name?: Maybe<Scalars["String"]>
  bankId?: Maybe<Scalars["Int"]>
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  fcmToken?: Maybe<Scalars["String"]>
  languageByDefault?: Maybe<Scalars["String"]>
  notifications?: Maybe<Array<Notification>>
  notificationsCount?: Maybe<Scalars["Int"]>
  accessToken?: Maybe<Scalars["String"]>
  authCompleted?: Maybe<Scalars["Boolean"]>
  transactions?: Maybe<Array<Transaction>>
  transactionsCount?: Maybe<Scalars["Int"]>
  profileCompleted?: Maybe<Scalars["Boolean"]>
  email?: Maybe<Scalars["String"]>
  idNumber?: Maybe<Scalars["String"]>
  documents?: Maybe<Array<Document>>
  documentsCount?: Maybe<Scalars["Int"]>
  bank?: Maybe<Bank>
  bankBranchNumber?: Maybe<Scalars["Int"]>
  bankAccountNumber?: Maybe<Scalars["Int"]>
  bankOwnerName?: Maybe<Scalars["String"]>
  contactFormSubmissions?: Maybe<Array<ContactFormSubmission>>
  contactFormSubmissionsCount?: Maybe<Scalars["Int"]>
  company?: Maybe<Company>
  hasCompany?: Maybe<Scalars["Boolean"]>
  isSuperAdmin?: Maybe<Scalars["Boolean"]>
  isAdmin?: Maybe<Scalars["Boolean"]>
  isActive?: Maybe<Scalars["Boolean"]>
  photoKey?: Maybe<Scalars["String"]>
  photoPublicUrl?: Maybe<Scalars["String"]>
  photoPresignedUrl?: Maybe<Scalars["String"]>
  phoneNumber?: Maybe<Scalars["String"]>
  password?: Maybe<PasswordState>
  lastLoginAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  receivedContracts?: Maybe<Array<Contract>>
  receivedContractsCount?: Maybe<Scalars["Int"]>
  referralContacts?: Maybe<Array<Contract>>
  referralContactsCount?: Maybe<Scalars["Int"]>
  contracts?: Maybe<Array<Contract>>
  contractsCount?: Maybe<Scalars["Int"]>
}

export type UserNotificationsArgs = {
  where?: NotificationWhereInput
  orderBy?: Array<NotificationOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<NotificationWhereUniqueInput>
}

export type UserNotificationsCountArgs = {
  where?: NotificationWhereInput
}

export type UserTransactionsArgs = {
  where?: TransactionWhereInput
  orderBy?: Array<TransactionOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<TransactionWhereUniqueInput>
}

export type UserTransactionsCountArgs = {
  where?: TransactionWhereInput
}

export type UserDocumentsArgs = {
  where?: DocumentWhereInput
  orderBy?: Array<DocumentOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<DocumentWhereUniqueInput>
}

export type UserDocumentsCountArgs = {
  where?: DocumentWhereInput
}

export type UserContactFormSubmissionsArgs = {
  where?: ContactFormSubmissionWhereInput
  orderBy?: Array<ContactFormSubmissionOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContactFormSubmissionWhereUniqueInput>
}

export type UserContactFormSubmissionsCountArgs = {
  where?: ContactFormSubmissionWhereInput
}

export type UserReceivedContractsArgs = {
  where?: ContractWhereInput
  orderBy?: Array<ContractOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContractWhereUniqueInput>
}

export type UserReceivedContractsCountArgs = {
  where?: ContractWhereInput
}

export type UserReferralContactsArgs = {
  where?: ContractWhereInput
  orderBy?: Array<ContractOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContractWhereUniqueInput>
}

export type UserReferralContactsCountArgs = {
  where?: ContractWhereInput
}

export type UserContractsArgs = {
  where?: ContractWhereInput
  orderBy?: Array<ContractOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContractWhereUniqueInput>
}

export type UserContractsCountArgs = {
  where?: ContractWhereInput
}

export type PasswordState = {
  __typename?: "PasswordState"
  isSet: Scalars["Boolean"]
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
  accessToken?: Maybe<Scalars["String"]>
  phoneNumber?: Maybe<Scalars["String"]>
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringNullableFilter>
  fcmToken?: Maybe<StringFilter>
  languageByDefault?: Maybe<StringNullableFilter>
  notifications?: Maybe<NotificationManyRelationFilter>
  accessToken?: Maybe<StringFilter>
  authCompleted?: Maybe<BooleanFilter>
  transactions?: Maybe<TransactionManyRelationFilter>
  email?: Maybe<StringFilter>
  idNumber?: Maybe<StringFilter>
  documents?: Maybe<DocumentManyRelationFilter>
  bank?: Maybe<BankWhereInput>
  bankBranchNumber?: Maybe<IntNullableFilter>
  bankAccountNumber?: Maybe<IntNullableFilter>
  bankOwnerName?: Maybe<StringFilter>
  contactFormSubmissions?: Maybe<ContactFormSubmissionManyRelationFilter>
  company?: Maybe<CompanyWhereInput>
  isSuperAdmin?: Maybe<BooleanFilter>
  isAdmin?: Maybe<BooleanFilter>
  isActive?: Maybe<BooleanFilter>
  photoKey?: Maybe<StringFilter>
  phoneNumber?: Maybe<StringFilter>
  lastLoginAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  receivedContracts?: Maybe<ContractManyRelationFilter>
  referralContacts?: Maybe<ContractManyRelationFilter>
  contracts?: Maybe<ContractManyRelationFilter>
}

export type StringNullableFilter = {
  equals?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  notIn?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  contains?: Maybe<Scalars["String"]>
  startsWith?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringNullableFilter>
}

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  notIn?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  contains?: Maybe<Scalars["String"]>
  startsWith?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringNullableFilter>
}

export type NotificationManyRelationFilter = {
  every?: Maybe<NotificationWhereInput>
  some?: Maybe<NotificationWhereInput>
  none?: Maybe<NotificationWhereInput>
}

export type BooleanFilter = {
  equals?: Maybe<Scalars["Boolean"]>
  not?: Maybe<BooleanFilter>
}

export type TransactionManyRelationFilter = {
  every?: Maybe<TransactionWhereInput>
  some?: Maybe<TransactionWhereInput>
  none?: Maybe<TransactionWhereInput>
}

export type DocumentManyRelationFilter = {
  every?: Maybe<DocumentWhereInput>
  some?: Maybe<DocumentWhereInput>
  none?: Maybe<DocumentWhereInput>
}

export type IntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Scalars["Int"]>>
  notIn?: Maybe<Array<Scalars["Int"]>>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  not?: Maybe<IntNullableFilter>
}

export type ContactFormSubmissionManyRelationFilter = {
  every?: Maybe<ContactFormSubmissionWhereInput>
  some?: Maybe<ContactFormSubmissionWhereInput>
  none?: Maybe<ContactFormSubmissionWhereInput>
}

export type ContractManyRelationFilter = {
  every?: Maybe<ContractWhereInput>
  some?: Maybe<ContractWhereInput>
  none?: Maybe<ContractWhereInput>
}

export type UserOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  fcmToken?: Maybe<OrderDirection>
  languageByDefault?: Maybe<OrderDirection>
  accessToken?: Maybe<OrderDirection>
  authCompleted?: Maybe<OrderDirection>
  email?: Maybe<OrderDirection>
  idNumber?: Maybe<OrderDirection>
  bankBranchNumber?: Maybe<OrderDirection>
  bankAccountNumber?: Maybe<OrderDirection>
  bankOwnerName?: Maybe<OrderDirection>
  isSuperAdmin?: Maybe<OrderDirection>
  isAdmin?: Maybe<OrderDirection>
  isActive?: Maybe<OrderDirection>
  photoKey?: Maybe<OrderDirection>
  phoneNumber?: Maybe<OrderDirection>
  lastLoginAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
}

export type UserUpdateInput = {
  name?: Maybe<Scalars["String"]>
  fcmToken?: Maybe<Scalars["String"]>
  languageByDefault?: Maybe<Scalars["String"]>
  notifications?: Maybe<NotificationRelateToManyForUpdateInput>
  accessToken?: Maybe<Scalars["String"]>
  authCompleted?: Maybe<Scalars["Boolean"]>
  transactions?: Maybe<TransactionRelateToManyForUpdateInput>
  email?: Maybe<Scalars["String"]>
  idNumber?: Maybe<Scalars["String"]>
  documents?: Maybe<DocumentRelateToManyForUpdateInput>
  bank?: Maybe<BankRelateToOneForUpdateInput>
  bankBranchNumber?: Maybe<Scalars["Int"]>
  bankAccountNumber?: Maybe<Scalars["Int"]>
  bankOwnerName?: Maybe<Scalars["String"]>
  contactFormSubmissions?: Maybe<
      ContactFormSubmissionRelateToManyForUpdateInput
      >
  company?: Maybe<CompanyRelateToOneForUpdateInput>
  isSuperAdmin?: Maybe<Scalars["Boolean"]>
  isAdmin?: Maybe<Scalars["Boolean"]>
  isActive?: Maybe<Scalars["Boolean"]>
  photoKey?: Maybe<Scalars["String"]>
  phoneNumber?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
  lastLoginAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  receivedContracts?: Maybe<ContractRelateToManyForUpdateInput>
  referralContacts?: Maybe<ContractRelateToManyForUpdateInput>
  contracts?: Maybe<ContractRelateToManyForUpdateInput>
}

export type NotificationRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>
  set?: Maybe<Array<NotificationWhereUniqueInput>>
  create?: Maybe<Array<NotificationCreateInput>>
  connect?: Maybe<Array<NotificationWhereUniqueInput>>
}

export type TransactionRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>
  set?: Maybe<Array<TransactionWhereUniqueInput>>
  create?: Maybe<Array<TransactionCreateInput>>
  connect?: Maybe<Array<TransactionWhereUniqueInput>>
}

export type DocumentRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<DocumentWhereUniqueInput>>
  set?: Maybe<Array<DocumentWhereUniqueInput>>
  create?: Maybe<Array<DocumentCreateInput>>
  connect?: Maybe<Array<DocumentWhereUniqueInput>>
}

export type BankRelateToOneForUpdateInput = {
  create?: Maybe<BankCreateInput>
  connect?: Maybe<BankWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type ContactFormSubmissionRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<ContactFormSubmissionWhereUniqueInput>>
  set?: Maybe<Array<ContactFormSubmissionWhereUniqueInput>>
  create?: Maybe<Array<ContactFormSubmissionCreateInput>>
  connect?: Maybe<Array<ContactFormSubmissionWhereUniqueInput>>
}

export type CompanyRelateToOneForUpdateInput = {
  create?: Maybe<CompanyCreateInput>
  connect?: Maybe<CompanyWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type ContractRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<ContractWhereUniqueInput>>
  set?: Maybe<Array<ContractWhereUniqueInput>>
  create?: Maybe<Array<ContractCreateInput>>
  connect?: Maybe<Array<ContractWhereUniqueInput>>
}

export type UserUpdateArgs = {
  where: UserWhereUniqueInput
  data: UserUpdateInput
}

export type UserCreateInput = {
  name?: Maybe<Scalars["String"]>
  fcmToken?: Maybe<Scalars["String"]>
  languageByDefault?: Maybe<Scalars["String"]>
  notifications?: Maybe<NotificationRelateToManyForCreateInput>
  accessToken?: Maybe<Scalars["String"]>
  authCompleted?: Maybe<Scalars["Boolean"]>
  transactions?: Maybe<TransactionRelateToManyForCreateInput>
  email?: Maybe<Scalars["String"]>
  idNumber?: Maybe<Scalars["String"]>
  documents?: Maybe<DocumentRelateToManyForCreateInput>
  bank?: Maybe<BankRelateToOneForCreateInput>
  bankBranchNumber?: Maybe<Scalars["Int"]>
  bankAccountNumber?: Maybe<Scalars["Int"]>
  bankOwnerName?: Maybe<Scalars["String"]>
  contactFormSubmissions?: Maybe<
      ContactFormSubmissionRelateToManyForCreateInput
      >
  company?: Maybe<CompanyRelateToOneForCreateInput>
  isSuperAdmin?: Maybe<Scalars["Boolean"]>
  isAdmin?: Maybe<Scalars["Boolean"]>
  isActive?: Maybe<Scalars["Boolean"]>
  photoKey?: Maybe<Scalars["String"]>
  phoneNumber?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
  lastLoginAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  receivedContracts?: Maybe<ContractRelateToManyForCreateInput>
  referralContacts?: Maybe<ContractRelateToManyForCreateInput>
  contracts?: Maybe<ContractRelateToManyForCreateInput>
}

export type NotificationRelateToManyForCreateInput = {
  create?: Maybe<Array<NotificationCreateInput>>
  connect?: Maybe<Array<NotificationWhereUniqueInput>>
}

export type TransactionRelateToManyForCreateInput = {
  create?: Maybe<Array<TransactionCreateInput>>
  connect?: Maybe<Array<TransactionWhereUniqueInput>>
}

export type DocumentRelateToManyForCreateInput = {
  create?: Maybe<Array<DocumentCreateInput>>
  connect?: Maybe<Array<DocumentWhereUniqueInput>>
}

export type BankRelateToOneForCreateInput = {
  create?: Maybe<BankCreateInput>
  connect?: Maybe<BankWhereUniqueInput>
}

export type ContactFormSubmissionRelateToManyForCreateInput = {
  create?: Maybe<Array<ContactFormSubmissionCreateInput>>
  connect?: Maybe<Array<ContactFormSubmissionWhereUniqueInput>>
}

export type CompanyRelateToOneForCreateInput = {
  create?: Maybe<CompanyCreateInput>
  connect?: Maybe<CompanyWhereUniqueInput>
}

export type ContractRelateToManyForCreateInput = {
  create?: Maybe<Array<ContractCreateInput>>
  connect?: Maybe<Array<ContractWhereUniqueInput>>
}

export type ContactFormSubject = {
  __typename?: "ContactFormSubject"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type ContactFormSubjectWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type ContactFormSubjectWhereInput = {
  AND?: Maybe<Array<ContactFormSubjectWhereInput>>
  OR?: Maybe<Array<ContactFormSubjectWhereInput>>
  NOT?: Maybe<Array<ContactFormSubjectWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
}

export type ContactFormSubjectOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  description?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
}

export type ContactFormSubjectUpdateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type ContactFormSubjectUpdateArgs = {
  where: ContactFormSubjectWhereUniqueInput
  data: ContactFormSubjectUpdateInput
}

export type ContactFormSubjectCreateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type ContactFormSubmission = {
  __typename?: "ContactFormSubmission"
  id: Scalars["ID"]
  subject?: Maybe<ContactFormSubject>
  message?: Maybe<Scalars["String"]>
  sender?: Maybe<User>
}

export type ContactFormSubmissionWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type ContactFormSubmissionWhereInput = {
  AND?: Maybe<Array<ContactFormSubmissionWhereInput>>
  OR?: Maybe<Array<ContactFormSubmissionWhereInput>>
  NOT?: Maybe<Array<ContactFormSubmissionWhereInput>>
  id?: Maybe<IdFilter>
  subject?: Maybe<ContactFormSubjectWhereInput>
  message?: Maybe<StringFilter>
  sender?: Maybe<UserWhereInput>
}

export type ContactFormSubmissionOrderByInput = {
  id?: Maybe<OrderDirection>
  message?: Maybe<OrderDirection>
}

export type ContactFormSubmissionUpdateInput = {
  subject?: Maybe<ContactFormSubjectRelateToOneForUpdateInput>
  message?: Maybe<Scalars["String"]>
  sender?: Maybe<UserRelateToOneForUpdateInput>
}

export type ContactFormSubjectRelateToOneForUpdateInput = {
  create?: Maybe<ContactFormSubjectCreateInput>
  connect?: Maybe<ContactFormSubjectWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type ContactFormSubmissionUpdateArgs = {
  where: ContactFormSubmissionWhereUniqueInput
  data: ContactFormSubmissionUpdateInput
}

export type ContactFormSubmissionCreateInput = {
  subject?: Maybe<ContactFormSubjectRelateToOneForCreateInput>
  message?: Maybe<Scalars["String"]>
  sender?: Maybe<UserRelateToOneForCreateInput>
}

export type ContactFormSubjectRelateToOneForCreateInput = {
  create?: Maybe<ContactFormSubjectCreateInput>
  connect?: Maybe<ContactFormSubjectWhereUniqueInput>
}

export type Document = {
  __typename?: "Document"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  publicUrl?: Maybe<Scalars["String"]>
  type?: Maybe<DocumentType>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  contract?: Maybe<Contract>
  owner?: Maybe<User>
  company?: Maybe<Company>
}

export type DocumentWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type DocumentWhereInput = {
  AND?: Maybe<Array<DocumentWhereInput>>
  OR?: Maybe<Array<DocumentWhereInput>>
  NOT?: Maybe<Array<DocumentWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  key?: Maybe<StringFilter>
  type?: Maybe<DocumentTypeWhereInput>
  createdAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
  contract?: Maybe<ContractWhereInput>
  owner?: Maybe<UserWhereInput>
  company?: Maybe<CompanyWhereInput>
}

export type DocumentOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  key?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
}

export type DocumentUpdateInput = {
  name?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  type?: Maybe<DocumentTypeRelateToOneForUpdateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  contract?: Maybe<ContractRelateToOneForUpdateInput>
  owner?: Maybe<UserRelateToOneForUpdateInput>
  company?: Maybe<CompanyRelateToOneForUpdateInput>
}

export type DocumentTypeRelateToOneForUpdateInput = {
  create?: Maybe<DocumentTypeCreateInput>
  connect?: Maybe<DocumentTypeWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type ContractRelateToOneForUpdateInput = {
  create?: Maybe<ContractCreateInput>
  connect?: Maybe<ContractWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type DocumentUpdateArgs = {
  where: DocumentWhereUniqueInput
  data: DocumentUpdateInput
}

export type DocumentCreateInput = {
  name?: Maybe<Scalars["String"]>
  key?: Maybe<Scalars["String"]>
  type?: Maybe<DocumentTypeRelateToOneForCreateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  contract?: Maybe<ContractRelateToOneForCreateInput>
  owner?: Maybe<UserRelateToOneForCreateInput>
  company?: Maybe<CompanyRelateToOneForCreateInput>
}

export type DocumentTypeRelateToOneForCreateInput = {
  create?: Maybe<DocumentTypeCreateInput>
  connect?: Maybe<DocumentTypeWhereUniqueInput>
}

export type ContractRelateToOneForCreateInput = {
  create?: Maybe<ContractCreateInput>
  connect?: Maybe<ContractWhereUniqueInput>
}

export type BusinessCategory = {
  __typename?: "BusinessCategory"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type BusinessCategoryWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type BusinessCategoryWhereInput = {
  AND?: Maybe<Array<BusinessCategoryWhereInput>>
  OR?: Maybe<Array<BusinessCategoryWhereInput>>
  NOT?: Maybe<Array<BusinessCategoryWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  order?: Maybe<IntNullableFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
}

export type BusinessCategoryOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  description?: Maybe<OrderDirection>
  order?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
}

export type BusinessCategoryUpdateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type BusinessCategoryUpdateArgs = {
  where: BusinessCategoryWhereUniqueInput
  data: BusinessCategoryUpdateInput
}

export type BusinessCategoryCreateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type Company = {
  __typename?: "Company"
  id: Scalars["ID"]
  logoKey?: Maybe<Scalars["String"]>
  logoPublicUrl?: Maybe<Scalars["String"]>
  logoPresignedUrl?: Maybe<Scalars["String"]>
  documents?: Maybe<Array<Document>>
  documentsCount?: Maybe<Scalars["Int"]>
  owner?: Maybe<User>
  name?: Maybe<Scalars["String"]>
  dealerType?: Maybe<CompanyDealerTypeType>
  businessId?: Maybe<Scalars["String"]>
  dealerId?: Maybe<Scalars["String"]>
  category?: Maybe<BusinessCategory>
  contactEmail?: Maybe<Scalars["String"]>
  contactPhoneNumber?: Maybe<Scalars["String"]>
  extraPhoneNumber?: Maybe<Scalars["String"]>
  address?: Maybe<Scalars["String"]>
  hasTransactionPermission?: Maybe<Scalars["Boolean"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type CompanyDocumentsArgs = {
  where?: DocumentWhereInput
  orderBy?: Array<DocumentOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<DocumentWhereUniqueInput>
}

export type CompanyDocumentsCountArgs = {
  where?: DocumentWhereInput
}

export enum CompanyDealerTypeType {
  AuthorizedDealer = "AUTHORIZED_DEALER",
  ExemptDealer = "EXEMPT_DEALER",
  PrivateCompany = "PRIVATE_COMPANY",
  PublicCompany = "PUBLIC_COMPANY",
  Association = "ASSOCIATION",
  Other = "OTHER"
}

export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type CompanyWhereInput = {
  AND?: Maybe<Array<CompanyWhereInput>>
  OR?: Maybe<Array<CompanyWhereInput>>
  NOT?: Maybe<Array<CompanyWhereInput>>
  id?: Maybe<IdFilter>
  logoKey?: Maybe<StringFilter>
  documents?: Maybe<DocumentManyRelationFilter>
  owner?: Maybe<UserWhereInput>
  name?: Maybe<StringFilter>
  dealerType?: Maybe<CompanyDealerTypeTypeNullableFilter>
  businessId?: Maybe<StringFilter>
  dealerId?: Maybe<StringFilter>
  category?: Maybe<BusinessCategoryWhereInput>
  contactEmail?: Maybe<StringFilter>
  contactPhoneNumber?: Maybe<StringFilter>
  extraPhoneNumber?: Maybe<StringFilter>
  address?: Maybe<StringFilter>
  hasTransactionPermission?: Maybe<BooleanFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
}

export type CompanyDealerTypeTypeNullableFilter = {
  equals?: Maybe<CompanyDealerTypeType>
  in?: Maybe<Array<CompanyDealerTypeType>>
  notIn?: Maybe<Array<CompanyDealerTypeType>>
  not?: Maybe<CompanyDealerTypeTypeNullableFilter>
}

export type CompanyOrderByInput = {
  id?: Maybe<OrderDirection>
  logoKey?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  dealerType?: Maybe<OrderDirection>
  businessId?: Maybe<OrderDirection>
  dealerId?: Maybe<OrderDirection>
  contactEmail?: Maybe<OrderDirection>
  contactPhoneNumber?: Maybe<OrderDirection>
  extraPhoneNumber?: Maybe<OrderDirection>
  address?: Maybe<OrderDirection>
  hasTransactionPermission?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
}

export type CompanyUpdateInput = {
  logoKey?: Maybe<Scalars["String"]>
  documents?: Maybe<DocumentRelateToManyForUpdateInput>
  owner?: Maybe<UserRelateToOneForUpdateInput>
  name?: Maybe<Scalars["String"]>
  dealerType?: Maybe<CompanyDealerTypeType>
  businessId?: Maybe<Scalars["String"]>
  dealerId?: Maybe<Scalars["String"]>
  category?: Maybe<BusinessCategoryRelateToOneForUpdateInput>
  contactEmail?: Maybe<Scalars["String"]>
  contactPhoneNumber?: Maybe<Scalars["String"]>
  extraPhoneNumber?: Maybe<Scalars["String"]>
  address?: Maybe<Scalars["String"]>
  hasTransactionPermission?: Maybe<Scalars["Boolean"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type BusinessCategoryRelateToOneForUpdateInput = {
  create?: Maybe<BusinessCategoryCreateInput>
  connect?: Maybe<BusinessCategoryWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type CompanyUpdateArgs = {
  where: CompanyWhereUniqueInput
  data: CompanyUpdateInput
}

export type CompanyCreateInput = {
  logoKey?: Maybe<Scalars["String"]>
  documents?: Maybe<DocumentRelateToManyForCreateInput>
  owner?: Maybe<UserRelateToOneForCreateInput>
  name?: Maybe<Scalars["String"]>
  dealerType?: Maybe<CompanyDealerTypeType>
  businessId?: Maybe<Scalars["String"]>
  dealerId?: Maybe<Scalars["String"]>
  category?: Maybe<BusinessCategoryRelateToOneForCreateInput>
  contactEmail?: Maybe<Scalars["String"]>
  contactPhoneNumber?: Maybe<Scalars["String"]>
  extraPhoneNumber?: Maybe<Scalars["String"]>
  address?: Maybe<Scalars["String"]>
  hasTransactionPermission?: Maybe<Scalars["Boolean"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type BusinessCategoryRelateToOneForCreateInput = {
  create?: Maybe<BusinessCategoryCreateInput>
  connect?: Maybe<BusinessCategoryWhereUniqueInput>
}

export type CharityAssociation = {
  __typename?: "CharityAssociation"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  contracts?: Maybe<Array<Contract>>
  contractsCount?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type CharityAssociationContractsArgs = {
  where?: ContractWhereInput
  orderBy?: Array<ContractOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContractWhereUniqueInput>
}

export type CharityAssociationContractsCountArgs = {
  where?: ContractWhereInput
}

export type CharityAssociationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type CharityAssociationWhereInput = {
  AND?: Maybe<Array<CharityAssociationWhereInput>>
  OR?: Maybe<Array<CharityAssociationWhereInput>>
  NOT?: Maybe<Array<CharityAssociationWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  contracts?: Maybe<ContractManyRelationFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
}

export type CharityAssociationOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  description?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
}

export type CharityAssociationUpdateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  contracts?: Maybe<ContractRelateToManyForUpdateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type CharityAssociationUpdateArgs = {
  where: CharityAssociationWhereUniqueInput
  data: CharityAssociationUpdateInput
}

export type CharityAssociationCreateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  contracts?: Maybe<ContractRelateToManyForCreateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type AdminContractComment = {
  __typename?: "AdminContractComment"
  id: Scalars["ID"]
  contract?: Maybe<Contract>
  user?: Maybe<User>
  comment?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type AdminContractCommentWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type AdminContractCommentWhereInput = {
  AND?: Maybe<Array<AdminContractCommentWhereInput>>
  OR?: Maybe<Array<AdminContractCommentWhereInput>>
  NOT?: Maybe<Array<AdminContractCommentWhereInput>>
  id?: Maybe<IdFilter>
  contract?: Maybe<ContractWhereInput>
  user?: Maybe<UserWhereInput>
  comment?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
}

export type AdminContractCommentOrderByInput = {
  id?: Maybe<OrderDirection>
  comment?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
}

export type AdminContractCommentUpdateInput = {
  contract?: Maybe<ContractRelateToOneForUpdateInput>
  user?: Maybe<UserRelateToOneForUpdateInput>
  comment?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type AdminContractCommentUpdateArgs = {
  where: AdminContractCommentWhereUniqueInput
  data: AdminContractCommentUpdateInput
}

export type AdminContractCommentCreateInput = {
  contract?: Maybe<ContractRelateToOneForCreateInput>
  user?: Maybe<UserRelateToOneForCreateInput>
  comment?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type ContractRejectReason = {
  __typename?: "ContractRejectReason"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  subject?: Maybe<ContractRejectReasonSubjectType>
  description?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export enum ContractRejectReasonSubjectType {
  RejectContract = "REJECT_CONTRACT",
  RejectDeal = "REJECT_DEAL"
}

export type ContractRejectReasonWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
  name?: Maybe<Scalars["String"]>
}

export type ContractRejectReasonWhereInput = {
  AND?: Maybe<Array<ContractRejectReasonWhereInput>>
  OR?: Maybe<Array<ContractRejectReasonWhereInput>>
  NOT?: Maybe<Array<ContractRejectReasonWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  subject?: Maybe<ContractRejectReasonSubjectTypeNullableFilter>
  description?: Maybe<StringFilter>
  order?: Maybe<IntNullableFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
}

export type ContractRejectReasonSubjectTypeNullableFilter = {
  equals?: Maybe<ContractRejectReasonSubjectType>
  in?: Maybe<Array<ContractRejectReasonSubjectType>>
  notIn?: Maybe<Array<ContractRejectReasonSubjectType>>
  not?: Maybe<ContractRejectReasonSubjectTypeNullableFilter>
}

export type ContractRejectReasonOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  subject?: Maybe<OrderDirection>
  description?: Maybe<OrderDirection>
  order?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
}

export type ContractRejectReasonUpdateInput = {
  name?: Maybe<Scalars["String"]>
  subject?: Maybe<ContractRejectReasonSubjectType>
  description?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type ContractRejectReasonUpdateArgs = {
  where: ContractRejectReasonWhereUniqueInput
  data: ContractRejectReasonUpdateInput
}

export type ContractRejectReasonCreateInput = {
  name?: Maybe<Scalars["String"]>
  subject?: Maybe<ContractRejectReasonSubjectType>
  description?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type Contract = {
  __typename?: "Contract"
  id: Scalars["ID"]
  isRecipientTermsRead?: Maybe<Scalars["Boolean"]>
  isRecipientTermsAgreed?: Maybe<Scalars["Boolean"]>
  signature?: Maybe<Scalars["String"]>
  notifications?: Maybe<Array<Notification>>
  notificationsCount?: Maybe<Scalars["Int"]>
  offer?: Maybe<Offer>
  currentUserIsRecipient?: Maybe<Scalars["Boolean"]>
  currentUserIsOwner?: Maybe<Scalars["Boolean"]>
  currentUserIsReferral?: Maybe<Scalars["Boolean"]>
  isRejectedDeal?: Maybe<Scalars["Boolean"]>
  adminComments?: Maybe<Array<AdminContractComment>>
  adminCommentsCount?: Maybe<Scalars["Int"]>
  latestTransaction?: Maybe<Scalars["String"]>
  completedPaymentType?: Maybe<Scalars["String"]>
  selectedPaymentType?: Maybe<Scalars["String"]>
  isPaymentStage?: Maybe<Scalars["Boolean"]>
  isPaid?: Maybe<Scalars["Boolean"]>
  isCompleted?: Maybe<Scalars["Boolean"]>
  isPending?: Maybe<Scalars["Boolean"]>
  isRejected?: Maybe<Scalars["Boolean"]>
  isDealClosed?: Maybe<Scalars["Boolean"]>
  isDropped?: Maybe<Scalars["Boolean"]>
  isSigned?: Maybe<Scalars["Boolean"]>
  currentUserHasAccess?: Maybe<Scalars["Boolean"]>
  overwriteBankDetails?: Maybe<Scalars["Boolean"]>
  contractId?: Maybe<Scalars["Int"]>
  receiverName?: Maybe<Scalars["String"]>
  receiverPhoneNumber?: Maybe<Scalars["String"]>
  receiver?: Maybe<User>
  referralContactName?: Maybe<Scalars["String"]>
  referralContactPhoneNumber?: Maybe<Scalars["String"]>
  referral?: Maybe<User>
  owner?: Maybe<User>
  comment?: Maybe<Scalars["String"]>
  contractDocument?: Maybe<Document>
  status?: Maybe<ContractStatusType>
  rejectionReason?: Maybe<Scalars["String"]>
  charityAssociation?: Maybe<CharityAssociation>
  buyMePhoneNumber?: Maybe<Scalars["String"]>
  dealType?: Maybe<ContractDealTypeType>
  dealValue?: Maybe<Scalars["Float"]>
  feeValue?: Maybe<Scalars["Float"]>
  dealPrice?: Maybe<Scalars["Float"]>
  profit?: Maybe<Scalars["Float"]>
  totalDealPrice?: Maybe<Scalars["Float"]>
  netValueBeforeTax?: Maybe<Scalars["Float"]>
  netValueAfterTax?: Maybe<Scalars["Float"]>
  paymentType?: Maybe<ContractPaymentTypeType>
  bank?: Maybe<Bank>
  bankBranchNumber?: Maybe<Scalars["Int"]>
  bankAccountNumber?: Maybe<Scalars["Int"]>
  bankOwnerName?: Maybe<Scalars["String"]>
  transactions?: Maybe<Array<Transaction>>
  transactionsCount?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  readAt?: Maybe<Scalars["DateTime"]>
  signedAt?: Maybe<Scalars["DateTime"]>
  dealClosedAt?: Maybe<Scalars["DateTime"]>
  paidAt?: Maybe<Scalars["DateTime"]>
  rejectedAt?: Maybe<Scalars["DateTime"]>
  completedAt?: Maybe<Scalars["DateTime"]>
  droppedAt?: Maybe<Scalars["DateTime"]>
}

export type ContractNotificationsArgs = {
  where?: NotificationWhereInput
  orderBy?: Array<NotificationOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<NotificationWhereUniqueInput>
}

export type ContractNotificationsCountArgs = {
  where?: NotificationWhereInput
}

export type ContractAdminCommentsArgs = {
  where?: AdminContractCommentWhereInput
  orderBy?: Array<AdminContractCommentOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<AdminContractCommentWhereUniqueInput>
}

export type ContractAdminCommentsCountArgs = {
  where?: AdminContractCommentWhereInput
}

export type ContractTransactionsArgs = {
  where?: TransactionWhereInput
  orderBy?: Array<TransactionOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<TransactionWhereUniqueInput>
}

export type ContractTransactionsCountArgs = {
  where?: TransactionWhereInput
}

export enum ContractStatusType {
  New = "NEW",
  Dropped = "DROPPED",
  Signed = "SIGNED",
  Rejected = "REJECTED",
  DealClosed = "DEAL_CLOSED",
  PaymentVerification = "PAYMENT_VERIFICATION",
  Paid = "PAID",
  Completed = "COMPLETED"
}

export enum ContractDealTypeType {
  Percentage = "PERCENTAGE",
  Fixed = "FIXED"
}

export enum ContractPaymentTypeType {
  BankTransfer = "BANK_TRANSFER",
  BuymePoints = "BUYME_POINTS",
  Donate = "DONATE"
}

export type ContractWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
  contractId?: Maybe<Scalars["Int"]>
}

export type ContractWhereInput = {
  AND?: Maybe<Array<ContractWhereInput>>
  OR?: Maybe<Array<ContractWhereInput>>
  NOT?: Maybe<Array<ContractWhereInput>>
  id?: Maybe<IdFilter>
  isRecipientTermsRead?: Maybe<BooleanFilter>
  isRecipientTermsAgreed?: Maybe<BooleanFilter>
  signature?: Maybe<StringFilter>
  notifications?: Maybe<NotificationManyRelationFilter>
  offer?: Maybe<OfferWhereInput>
  adminComments?: Maybe<AdminContractCommentManyRelationFilter>
  overwriteBankDetails?: Maybe<BooleanFilter>
  contractId?: Maybe<IntNullableFilter>
  receiverName?: Maybe<StringFilter>
  receiverPhoneNumber?: Maybe<StringFilter>
  receiver?: Maybe<UserWhereInput>
  referralContactName?: Maybe<StringFilter>
  referralContactPhoneNumber?: Maybe<StringFilter>
  referral?: Maybe<UserWhereInput>
  owner?: Maybe<UserWhereInput>
  comment?: Maybe<StringFilter>
  contractDocument?: Maybe<DocumentWhereInput>
  status?: Maybe<ContractStatusTypeNullableFilter>
  rejectionReason?: Maybe<StringFilter>
  charityAssociation?: Maybe<CharityAssociationWhereInput>
  buyMePhoneNumber?: Maybe<StringFilter>
  dealType?: Maybe<ContractDealTypeTypeNullableFilter>
  dealValue?: Maybe<FloatFilter>
  feeValue?: Maybe<FloatNullableFilter>
  dealPrice?: Maybe<FloatNullableFilter>
  netValueAfterTax?: Maybe<FloatNullableFilter>
  paymentType?: Maybe<ContractPaymentTypeTypeNullableFilter>
  bank?: Maybe<BankWhereInput>
  bankBranchNumber?: Maybe<IntNullableFilter>
  bankAccountNumber?: Maybe<IntNullableFilter>
  bankOwnerName?: Maybe<StringFilter>
  transactions?: Maybe<TransactionManyRelationFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
  readAt?: Maybe<DateTimeNullableFilter>
  signedAt?: Maybe<DateTimeNullableFilter>
  dealClosedAt?: Maybe<DateTimeNullableFilter>
  paidAt?: Maybe<DateTimeNullableFilter>
  rejectedAt?: Maybe<DateTimeNullableFilter>
  completedAt?: Maybe<DateTimeNullableFilter>
  droppedAt?: Maybe<DateTimeNullableFilter>
}

export type AdminContractCommentManyRelationFilter = {
  every?: Maybe<AdminContractCommentWhereInput>
  some?: Maybe<AdminContractCommentWhereInput>
  none?: Maybe<AdminContractCommentWhereInput>
}

export type ContractStatusTypeNullableFilter = {
  equals?: Maybe<ContractStatusType>
  in?: Maybe<Array<ContractStatusType>>
  notIn?: Maybe<Array<ContractStatusType>>
  not?: Maybe<ContractStatusTypeNullableFilter>
}

export type ContractDealTypeTypeNullableFilter = {
  equals?: Maybe<ContractDealTypeType>
  in?: Maybe<Array<ContractDealTypeType>>
  notIn?: Maybe<Array<ContractDealTypeType>>
  not?: Maybe<ContractDealTypeTypeNullableFilter>
}

export type FloatNullableFilter = {
  equals?: Maybe<Scalars["Float"]>
  in?: Maybe<Array<Scalars["Float"]>>
  notIn?: Maybe<Array<Scalars["Float"]>>
  lt?: Maybe<Scalars["Float"]>
  lte?: Maybe<Scalars["Float"]>
  gt?: Maybe<Scalars["Float"]>
  gte?: Maybe<Scalars["Float"]>
  not?: Maybe<FloatNullableFilter>
}

export type ContractPaymentTypeTypeNullableFilter = {
  equals?: Maybe<ContractPaymentTypeType>
  in?: Maybe<Array<ContractPaymentTypeType>>
  notIn?: Maybe<Array<ContractPaymentTypeType>>
  not?: Maybe<ContractPaymentTypeTypeNullableFilter>
}

export type ContractOrderByInput = {
  id?: Maybe<OrderDirection>
  isRecipientTermsRead?: Maybe<OrderDirection>
  isRecipientTermsAgreed?: Maybe<OrderDirection>
  signature?: Maybe<OrderDirection>
  overwriteBankDetails?: Maybe<OrderDirection>
  contractId?: Maybe<OrderDirection>
  receiverName?: Maybe<OrderDirection>
  receiverPhoneNumber?: Maybe<OrderDirection>
  referralContactName?: Maybe<OrderDirection>
  referralContactPhoneNumber?: Maybe<OrderDirection>
  comment?: Maybe<OrderDirection>
  status?: Maybe<OrderDirection>
  rejectionReason?: Maybe<OrderDirection>
  buyMePhoneNumber?: Maybe<OrderDirection>
  dealType?: Maybe<OrderDirection>
  dealValue?: Maybe<OrderDirection>
  feeValue?: Maybe<OrderDirection>
  dealPrice?: Maybe<OrderDirection>
  netValueAfterTax?: Maybe<OrderDirection>
  paymentType?: Maybe<OrderDirection>
  bankBranchNumber?: Maybe<OrderDirection>
  bankAccountNumber?: Maybe<OrderDirection>
  bankOwnerName?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
  readAt?: Maybe<OrderDirection>
  signedAt?: Maybe<OrderDirection>
  dealClosedAt?: Maybe<OrderDirection>
  paidAt?: Maybe<OrderDirection>
  rejectedAt?: Maybe<OrderDirection>
  completedAt?: Maybe<OrderDirection>
  droppedAt?: Maybe<OrderDirection>
}

export type ContractUpdateInput = {
  isRecipientTermsRead?: Maybe<Scalars["Boolean"]>
  isRecipientTermsAgreed?: Maybe<Scalars["Boolean"]>
  signature?: Maybe<Scalars["String"]>
  notifications?: Maybe<NotificationRelateToManyForUpdateInput>
  offer?: Maybe<OfferRelateToOneForUpdateInput>
  adminComments?: Maybe<AdminContractCommentRelateToManyForUpdateInput>
  overwriteBankDetails?: Maybe<Scalars["Boolean"]>
  contractId?: Maybe<Scalars["Int"]>
  receiverName?: Maybe<Scalars["String"]>
  receiverPhoneNumber?: Maybe<Scalars["String"]>
  receiver?: Maybe<UserRelateToOneForUpdateInput>
  referralContactName?: Maybe<Scalars["String"]>
  referralContactPhoneNumber?: Maybe<Scalars["String"]>
  referral?: Maybe<UserRelateToOneForUpdateInput>
  owner?: Maybe<UserRelateToOneForUpdateInput>
  comment?: Maybe<Scalars["String"]>
  contractDocument?: Maybe<DocumentRelateToOneForUpdateInput>
  status?: Maybe<ContractStatusType>
  rejectionReason?: Maybe<Scalars["String"]>
  charityAssociation?: Maybe<CharityAssociationRelateToOneForUpdateInput>
  buyMePhoneNumber?: Maybe<Scalars["String"]>
  dealType?: Maybe<ContractDealTypeType>
  dealValue?: Maybe<Scalars["Float"]>
  feeValue?: Maybe<Scalars["Float"]>
  dealPrice?: Maybe<Scalars["Float"]>
  netValueAfterTax?: Maybe<Scalars["Float"]>
  paymentType?: Maybe<ContractPaymentTypeType>
  bank?: Maybe<BankRelateToOneForUpdateInput>
  bankBranchNumber?: Maybe<Scalars["Int"]>
  bankAccountNumber?: Maybe<Scalars["Int"]>
  bankOwnerName?: Maybe<Scalars["String"]>
  transactions?: Maybe<TransactionRelateToManyForUpdateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  readAt?: Maybe<Scalars["DateTime"]>
  signedAt?: Maybe<Scalars["DateTime"]>
  dealClosedAt?: Maybe<Scalars["DateTime"]>
  paidAt?: Maybe<Scalars["DateTime"]>
  rejectedAt?: Maybe<Scalars["DateTime"]>
  completedAt?: Maybe<Scalars["DateTime"]>
  droppedAt?: Maybe<Scalars["DateTime"]>
}

export type OfferRelateToOneForUpdateInput = {
  create?: Maybe<OfferCreateInput>
  connect?: Maybe<OfferWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type AdminContractCommentRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<AdminContractCommentWhereUniqueInput>>
  set?: Maybe<Array<AdminContractCommentWhereUniqueInput>>
  create?: Maybe<Array<AdminContractCommentCreateInput>>
  connect?: Maybe<Array<AdminContractCommentWhereUniqueInput>>
}

export type DocumentRelateToOneForUpdateInput = {
  create?: Maybe<DocumentCreateInput>
  connect?: Maybe<DocumentWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type CharityAssociationRelateToOneForUpdateInput = {
  create?: Maybe<CharityAssociationCreateInput>
  connect?: Maybe<CharityAssociationWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type ContractUpdateArgs = {
  where: ContractWhereUniqueInput
  data: ContractUpdateInput
}

export type ContractCreateInput = {
  isRecipientTermsRead?: Maybe<Scalars["Boolean"]>
  isRecipientTermsAgreed?: Maybe<Scalars["Boolean"]>
  signature?: Maybe<Scalars["String"]>
  notifications?: Maybe<NotificationRelateToManyForCreateInput>
  offer?: Maybe<OfferRelateToOneForCreateInput>
  adminComments?: Maybe<AdminContractCommentRelateToManyForCreateInput>
  overwriteBankDetails?: Maybe<Scalars["Boolean"]>
  contractId?: Maybe<Scalars["Int"]>
  receiverName?: Maybe<Scalars["String"]>
  receiverPhoneNumber?: Maybe<Scalars["String"]>
  receiver?: Maybe<UserRelateToOneForCreateInput>
  referralContactName?: Maybe<Scalars["String"]>
  referralContactPhoneNumber?: Maybe<Scalars["String"]>
  referral?: Maybe<UserRelateToOneForCreateInput>
  owner?: Maybe<UserRelateToOneForCreateInput>
  comment?: Maybe<Scalars["String"]>
  contractDocument?: Maybe<DocumentRelateToOneForCreateInput>
  status?: Maybe<ContractStatusType>
  rejectionReason?: Maybe<Scalars["String"]>
  charityAssociation?: Maybe<CharityAssociationRelateToOneForCreateInput>
  buyMePhoneNumber?: Maybe<Scalars["String"]>
  dealType?: Maybe<ContractDealTypeType>
  dealValue?: Maybe<Scalars["Float"]>
  feeValue?: Maybe<Scalars["Float"]>
  dealPrice?: Maybe<Scalars["Float"]>
  netValueAfterTax?: Maybe<Scalars["Float"]>
  paymentType?: Maybe<ContractPaymentTypeType>
  bank?: Maybe<BankRelateToOneForCreateInput>
  bankBranchNumber?: Maybe<Scalars["Int"]>
  bankAccountNumber?: Maybe<Scalars["Int"]>
  bankOwnerName?: Maybe<Scalars["String"]>
  transactions?: Maybe<TransactionRelateToManyForCreateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
  readAt?: Maybe<Scalars["DateTime"]>
  signedAt?: Maybe<Scalars["DateTime"]>
  dealClosedAt?: Maybe<Scalars["DateTime"]>
  paidAt?: Maybe<Scalars["DateTime"]>
  rejectedAt?: Maybe<Scalars["DateTime"]>
  completedAt?: Maybe<Scalars["DateTime"]>
  droppedAt?: Maybe<Scalars["DateTime"]>
}

export type OfferRelateToOneForCreateInput = {
  create?: Maybe<OfferCreateInput>
  connect?: Maybe<OfferWhereUniqueInput>
}

export type AdminContractCommentRelateToManyForCreateInput = {
  create?: Maybe<Array<AdminContractCommentCreateInput>>
  connect?: Maybe<Array<AdminContractCommentWhereUniqueInput>>
}

export type DocumentRelateToOneForCreateInput = {
  create?: Maybe<DocumentCreateInput>
  connect?: Maybe<DocumentWhereUniqueInput>
}

export type CharityAssociationRelateToOneForCreateInput = {
  create?: Maybe<CharityAssociationCreateInput>
  connect?: Maybe<CharityAssociationWhereUniqueInput>
}

export type CronTask = {
  __typename?: "CronTask"
  id: Scalars["ID"]
  createdAt?: Maybe<Scalars["DateTime"]>
  subject?: Maybe<CronTaskSubjectType>
}

export enum CronTaskSubjectType {
  ResponseReminder = "RESPONSE_REMINDER",
  PaymentReminder = "PAYMENT_REMINDER"
}

export type CronTaskWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type CronTaskWhereInput = {
  AND?: Maybe<Array<CronTaskWhereInput>>
  OR?: Maybe<Array<CronTaskWhereInput>>
  NOT?: Maybe<Array<CronTaskWhereInput>>
  id?: Maybe<IdFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  subject?: Maybe<CronTaskSubjectTypeNullableFilter>
}

export type CronTaskSubjectTypeNullableFilter = {
  equals?: Maybe<CronTaskSubjectType>
  in?: Maybe<Array<CronTaskSubjectType>>
  notIn?: Maybe<Array<CronTaskSubjectType>>
  not?: Maybe<CronTaskSubjectTypeNullableFilter>
}

export type CronTaskOrderByInput = {
  id?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  subject?: Maybe<OrderDirection>
}

export type CronTaskUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>
  subject?: Maybe<CronTaskSubjectType>
}

export type CronTaskUpdateArgs = {
  where: CronTaskWhereUniqueInput
  data: CronTaskUpdateInput
}

export type CronTaskCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>
  subject?: Maybe<CronTaskSubjectType>
}

export type CronLog = {
  __typename?: "CronLog"
  id: Scalars["ID"]
  createdAt?: Maybe<Scalars["DateTime"]>
  notifications?: Maybe<Array<Notification>>
  notificationsCount?: Maybe<Scalars["Int"]>
  cronTask?: Maybe<CronTask>
  contract?: Maybe<Contract>
  subject?: Maybe<CronLogSubjectType>
}

export type CronLogNotificationsArgs = {
  where?: NotificationWhereInput
  orderBy?: Array<NotificationOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<NotificationWhereUniqueInput>
}

export type CronLogNotificationsCountArgs = {
  where?: NotificationWhereInput
}

export enum CronLogSubjectType {
  ResponseReminder = "RESPONSE_REMINDER",
  PaymentReminder = "PAYMENT_REMINDER"
}

export type CronLogWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type CronLogWhereInput = {
  AND?: Maybe<Array<CronLogWhereInput>>
  OR?: Maybe<Array<CronLogWhereInput>>
  NOT?: Maybe<Array<CronLogWhereInput>>
  id?: Maybe<IdFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  notifications?: Maybe<NotificationManyRelationFilter>
  cronTask?: Maybe<CronTaskWhereInput>
  contract?: Maybe<ContractWhereInput>
  subject?: Maybe<CronLogSubjectTypeNullableFilter>
}

export type CronLogSubjectTypeNullableFilter = {
  equals?: Maybe<CronLogSubjectType>
  in?: Maybe<Array<CronLogSubjectType>>
  notIn?: Maybe<Array<CronLogSubjectType>>
  not?: Maybe<CronLogSubjectTypeNullableFilter>
}

export type CronLogOrderByInput = {
  id?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  subject?: Maybe<OrderDirection>
}

export type CronLogUpdateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>
  notifications?: Maybe<NotificationRelateToManyForUpdateInput>
  cronTask?: Maybe<CronTaskRelateToOneForUpdateInput>
  contract?: Maybe<ContractRelateToOneForUpdateInput>
  subject?: Maybe<CronLogSubjectType>
}

export type CronTaskRelateToOneForUpdateInput = {
  create?: Maybe<CronTaskCreateInput>
  connect?: Maybe<CronTaskWhereUniqueInput>
  disconnect?: Maybe<Scalars["Boolean"]>
}

export type CronLogUpdateArgs = {
  where: CronLogWhereUniqueInput
  data: CronLogUpdateInput
}

export type CronLogCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>
  notifications?: Maybe<NotificationRelateToManyForCreateInput>
  cronTask?: Maybe<CronTaskRelateToOneForCreateInput>
  contract?: Maybe<ContractRelateToOneForCreateInput>
  subject?: Maybe<CronLogSubjectType>
}

export type CronTaskRelateToOneForCreateInput = {
  create?: Maybe<CronTaskCreateInput>
  connect?: Maybe<CronTaskWhereUniqueInput>
}

export type NotificationTemplate = {
  __typename?: "NotificationTemplate"
  id: Scalars["ID"]
  type?: Maybe<NotificationTemplateTypeType>
  color?: Maybe<Scalars["String"]>
  language?: Maybe<Scalars["String"]>
  smsTemplate?: Maybe<Scalars["String"]>
  emailTemplate?: Maybe<NotificationTemplate_EmailTemplate_Document>
  titleTemplate?: Maybe<Scalars["String"]>
  bodyTemplate?: Maybe<Scalars["String"]>
}

export enum NotificationTemplateTypeType {
  NewContract = "NEW_CONTRACT",
  ResponseReminder = "RESPONSE_REMINDER",
  ContractDropped = "CONTRACT_DROPPED",
  ContractRejected = "CONTRACT_REJECTED",
  ContractSigned = "CONTRACT_SIGNED",
  DealClosed = "DEAL_CLOSED",
  PaymentReminder = "PAYMENT_REMINDER",
  PaymentReceived = "PAYMENT_RECEIVED",
  PaymentFailed = "PAYMENT_FAILED",
  PaymentCompleted = "PAYMENT_COMPLETED"
}

export type NotificationTemplate_EmailTemplate_Document = {
  __typename?: "NotificationTemplate_emailTemplate_Document"
  document: Scalars["JSON"]
}

export type NotificationTemplate_EmailTemplate_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars["Boolean"]
}

export type NotificationTemplateWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type NotificationTemplateWhereInput = {
  AND?: Maybe<Array<NotificationTemplateWhereInput>>
  OR?: Maybe<Array<NotificationTemplateWhereInput>>
  NOT?: Maybe<Array<NotificationTemplateWhereInput>>
  id?: Maybe<IdFilter>
  type?: Maybe<NotificationTemplateTypeTypeNullableFilter>
  color?: Maybe<StringNullableFilter>
  language?: Maybe<StringNullableFilter>
  smsTemplate?: Maybe<StringFilter>
  titleTemplate?: Maybe<StringFilter>
  bodyTemplate?: Maybe<StringFilter>
}

export type NotificationTemplateTypeTypeNullableFilter = {
  equals?: Maybe<NotificationTemplateTypeType>
  in?: Maybe<Array<NotificationTemplateTypeType>>
  notIn?: Maybe<Array<NotificationTemplateTypeType>>
  not?: Maybe<NotificationTemplateTypeTypeNullableFilter>
}

export type NotificationTemplateOrderByInput = {
  id?: Maybe<OrderDirection>
  type?: Maybe<OrderDirection>
  color?: Maybe<OrderDirection>
  language?: Maybe<OrderDirection>
  smsTemplate?: Maybe<OrderDirection>
  titleTemplate?: Maybe<OrderDirection>
  bodyTemplate?: Maybe<OrderDirection>
}

export type NotificationTemplateUpdateInput = {
  type?: Maybe<NotificationTemplateTypeType>
  color?: Maybe<Scalars["String"]>
  language?: Maybe<Scalars["String"]>
  smsTemplate?: Maybe<Scalars["String"]>
  emailTemplate?: Maybe<Scalars["JSON"]>
  titleTemplate?: Maybe<Scalars["String"]>
  bodyTemplate?: Maybe<Scalars["String"]>
}

export type NotificationTemplateUpdateArgs = {
  where: NotificationTemplateWhereUniqueInput
  data: NotificationTemplateUpdateInput
}

export type NotificationTemplateCreateInput = {
  type?: Maybe<NotificationTemplateTypeType>
  color?: Maybe<Scalars["String"]>
  language?: Maybe<Scalars["String"]>
  smsTemplate?: Maybe<Scalars["String"]>
  emailTemplate?: Maybe<Scalars["JSON"]>
  titleTemplate?: Maybe<Scalars["String"]>
  bodyTemplate?: Maybe<Scalars["String"]>
}

export type Notification = {
  __typename?: "Notification"
  id: Scalars["ID"]
  type?: Maybe<NotificationTypeType>
  recipient?: Maybe<User>
  contract?: Maybe<Contract>
  data?: Maybe<Scalars["JSON"]>
  isRead?: Maybe<Scalars["Boolean"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  readAt?: Maybe<Scalars["DateTime"]>
  sentToPhoneNumber?: Maybe<Scalars["String"]>
  sentToEmail?: Maybe<Scalars["String"]>
}

export enum NotificationTypeType {
  NewContract = "NEW_CONTRACT",
  ResponseReminder = "RESPONSE_REMINDER",
  ContractDropped = "CONTRACT_DROPPED",
  ContractRejected = "CONTRACT_REJECTED",
  ContractSigned = "CONTRACT_SIGNED",
  DealClosed = "DEAL_CLOSED",
  PaymentReminder = "PAYMENT_REMINDER",
  PaymentReceived = "PAYMENT_RECEIVED",
  PaymentFailed = "PAYMENT_FAILED",
  PaymentCompleted = "PAYMENT_COMPLETED"
}

export type NotificationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type NotificationWhereInput = {
  AND?: Maybe<Array<NotificationWhereInput>>
  OR?: Maybe<Array<NotificationWhereInput>>
  NOT?: Maybe<Array<NotificationWhereInput>>
  id?: Maybe<IdFilter>
  type?: Maybe<NotificationTypeTypeNullableFilter>
  recipient?: Maybe<UserWhereInput>
  contract?: Maybe<ContractWhereInput>
  isRead?: Maybe<BooleanFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  readAt?: Maybe<DateTimeNullableFilter>
  sentToPhoneNumber?: Maybe<StringFilter>
  sentToEmail?: Maybe<StringFilter>
}

export type NotificationTypeTypeNullableFilter = {
  equals?: Maybe<NotificationTypeType>
  in?: Maybe<Array<NotificationTypeType>>
  notIn?: Maybe<Array<NotificationTypeType>>
  not?: Maybe<NotificationTypeTypeNullableFilter>
}

export type NotificationOrderByInput = {
  id?: Maybe<OrderDirection>
  type?: Maybe<OrderDirection>
  isRead?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  readAt?: Maybe<OrderDirection>
  sentToPhoneNumber?: Maybe<OrderDirection>
  sentToEmail?: Maybe<OrderDirection>
}

export type NotificationUpdateInput = {
  type?: Maybe<NotificationTypeType>
  recipient?: Maybe<UserRelateToOneForUpdateInput>
  contract?: Maybe<ContractRelateToOneForUpdateInput>
  isRead?: Maybe<Scalars["Boolean"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  readAt?: Maybe<Scalars["DateTime"]>
  sentToPhoneNumber?: Maybe<Scalars["String"]>
  sentToEmail?: Maybe<Scalars["String"]>
}

export type NotificationUpdateArgs = {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateInput
}

export type NotificationCreateInput = {
  type?: Maybe<NotificationTypeType>
  recipient?: Maybe<UserRelateToOneForCreateInput>
  contract?: Maybe<ContractRelateToOneForCreateInput>
  isRead?: Maybe<Scalars["Boolean"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  readAt?: Maybe<Scalars["DateTime"]>
  sentToPhoneNumber?: Maybe<Scalars["String"]>
  sentToEmail?: Maybe<Scalars["String"]>
}

export type Transaction = {
  __typename?: "Transaction"
  id: Scalars["ID"]
  userEmail?: Maybe<Scalars["String"]>
  userPhoneNumber?: Maybe<Scalars["String"]>
  owner?: Maybe<User>
  paymentId?: Maybe<Scalars["Int"]>
  paymentProfileId?: Maybe<Scalars["String"]>
  paymentUrl?: Maybe<Scalars["String"]>
  refContractId?: Maybe<Scalars["String"]>
  contract?: Maybe<Contract>
  amount?: Maybe<Scalars["Float"]>
  status?: Maybe<TransactionStatusType>
  paymentType?: Maybe<TransactionPaymentTypeType>
  bankTransferConfirmDocument?: Maybe<Document>
  bankTransferConfirmNumber?: Maybe<Scalars["String"]>
  bankTransferComment?: Maybe<Scalars["String"]>
  transactionInfo?: Maybe<Scalars["JSON"]>
  paymentGatewayTransactionId?: Maybe<Scalars["Int"]>
  responseCode?: Maybe<Scalars["Int"]>
  responseMessage?: Maybe<Scalars["String"]>
  successPaidAt?: Maybe<Scalars["DateTime"]>
  failedPaidAt?: Maybe<Scalars["DateTime"]>
  rejectedPaidAt?: Maybe<Scalars["DateTime"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export enum TransactionStatusType {
  Pending = "PENDING",
  Rejected = "REJECTED",
  Success = "SUCCESS",
  Failed = "FAILED"
}

export enum TransactionPaymentTypeType {
  BankTransfer = "BANK_TRANSFER",
  CreditCard = "CREDIT_CARD"
}

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
  paymentId?: Maybe<Scalars["Int"]>
}

export type TransactionWhereInput = {
  AND?: Maybe<Array<TransactionWhereInput>>
  OR?: Maybe<Array<TransactionWhereInput>>
  NOT?: Maybe<Array<TransactionWhereInput>>
  id?: Maybe<IdFilter>
  userEmail?: Maybe<StringFilter>
  userPhoneNumber?: Maybe<StringFilter>
  owner?: Maybe<UserWhereInput>
  paymentId?: Maybe<IntNullableFilter>
  paymentProfileId?: Maybe<StringFilter>
  paymentUrl?: Maybe<StringFilter>
  refContractId?: Maybe<StringFilter>
  contract?: Maybe<ContractWhereInput>
  amount?: Maybe<FloatFilter>
  status?: Maybe<TransactionStatusTypeNullableFilter>
  paymentType?: Maybe<TransactionPaymentTypeTypeNullableFilter>
  bankTransferConfirmDocument?: Maybe<DocumentWhereInput>
  bankTransferConfirmNumber?: Maybe<StringFilter>
  bankTransferComment?: Maybe<StringFilter>
  paymentGatewayTransactionId?: Maybe<IntNullableFilter>
  responseCode?: Maybe<IntNullableFilter>
  responseMessage?: Maybe<StringFilter>
  successPaidAt?: Maybe<DateTimeNullableFilter>
  failedPaidAt?: Maybe<DateTimeNullableFilter>
  rejectedPaidAt?: Maybe<DateTimeNullableFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
}

export type TransactionStatusTypeNullableFilter = {
  equals?: Maybe<TransactionStatusType>
  in?: Maybe<Array<TransactionStatusType>>
  notIn?: Maybe<Array<TransactionStatusType>>
  not?: Maybe<TransactionStatusTypeNullableFilter>
}

export type TransactionPaymentTypeTypeNullableFilter = {
  equals?: Maybe<TransactionPaymentTypeType>
  in?: Maybe<Array<TransactionPaymentTypeType>>
  notIn?: Maybe<Array<TransactionPaymentTypeType>>
  not?: Maybe<TransactionPaymentTypeTypeNullableFilter>
}

export type TransactionOrderByInput = {
  id?: Maybe<OrderDirection>
  userEmail?: Maybe<OrderDirection>
  userPhoneNumber?: Maybe<OrderDirection>
  paymentId?: Maybe<OrderDirection>
  paymentProfileId?: Maybe<OrderDirection>
  paymentUrl?: Maybe<OrderDirection>
  refContractId?: Maybe<OrderDirection>
  amount?: Maybe<OrderDirection>
  status?: Maybe<OrderDirection>
  paymentType?: Maybe<OrderDirection>
  bankTransferConfirmNumber?: Maybe<OrderDirection>
  bankTransferComment?: Maybe<OrderDirection>
  paymentGatewayTransactionId?: Maybe<OrderDirection>
  responseCode?: Maybe<OrderDirection>
  responseMessage?: Maybe<OrderDirection>
  successPaidAt?: Maybe<OrderDirection>
  failedPaidAt?: Maybe<OrderDirection>
  rejectedPaidAt?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
}

export type TransactionUpdateInput = {
  userEmail?: Maybe<Scalars["String"]>
  userPhoneNumber?: Maybe<Scalars["String"]>
  owner?: Maybe<UserRelateToOneForUpdateInput>
  paymentId?: Maybe<Scalars["Int"]>
  paymentProfileId?: Maybe<Scalars["String"]>
  paymentUrl?: Maybe<Scalars["String"]>
  refContractId?: Maybe<Scalars["String"]>
  contract?: Maybe<ContractRelateToOneForUpdateInput>
  amount?: Maybe<Scalars["Float"]>
  status?: Maybe<TransactionStatusType>
  paymentType?: Maybe<TransactionPaymentTypeType>
  bankTransferConfirmDocument?: Maybe<DocumentRelateToOneForUpdateInput>
  bankTransferConfirmNumber?: Maybe<Scalars["String"]>
  bankTransferComment?: Maybe<Scalars["String"]>
  transactionInfo?: Maybe<Scalars["JSON"]>
  paymentGatewayTransactionId?: Maybe<Scalars["Int"]>
  responseCode?: Maybe<Scalars["Int"]>
  responseMessage?: Maybe<Scalars["String"]>
  successPaidAt?: Maybe<Scalars["DateTime"]>
  failedPaidAt?: Maybe<Scalars["DateTime"]>
  rejectedPaidAt?: Maybe<Scalars["DateTime"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type TransactionUpdateArgs = {
  where: TransactionWhereUniqueInput
  data: TransactionUpdateInput
}

export type TransactionCreateInput = {
  userEmail?: Maybe<Scalars["String"]>
  userPhoneNumber?: Maybe<Scalars["String"]>
  owner?: Maybe<UserRelateToOneForCreateInput>
  paymentId?: Maybe<Scalars["Int"]>
  paymentProfileId?: Maybe<Scalars["String"]>
  paymentUrl?: Maybe<Scalars["String"]>
  refContractId?: Maybe<Scalars["String"]>
  contract?: Maybe<ContractRelateToOneForCreateInput>
  amount?: Maybe<Scalars["Float"]>
  status?: Maybe<TransactionStatusType>
  paymentType?: Maybe<TransactionPaymentTypeType>
  bankTransferConfirmDocument?: Maybe<DocumentRelateToOneForCreateInput>
  bankTransferConfirmNumber?: Maybe<Scalars["String"]>
  bankTransferComment?: Maybe<Scalars["String"]>
  transactionInfo?: Maybe<Scalars["JSON"]>
  paymentGatewayTransactionId?: Maybe<Scalars["Int"]>
  responseCode?: Maybe<Scalars["Int"]>
  responseMessage?: Maybe<Scalars["String"]>
  successPaidAt?: Maybe<Scalars["DateTime"]>
  failedPaidAt?: Maybe<Scalars["DateTime"]>
  rejectedPaidAt?: Maybe<Scalars["DateTime"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type SiteSetting = {
  __typename?: "SiteSetting"
  id: Scalars["ID"]
  testMode?: Maybe<Scalars["Boolean"]>
  paymentDescriptionTemplate?: Maybe<Scalars["String"]>
  cronResponseRemindPeriodDays?: Maybe<Scalars["Int"]>
  cronPaymentRemindPeriodDays?: Maybe<Scalars["Int"]>
  onboardingPageCount?: Maybe<Scalars["Int"]>
  globalCurrencySymbol?: Maybe<Scalars["String"]>
  feeValue?: Maybe<Scalars["Float"]>
  contractDocument?: Maybe<SiteSetting_ContractDocument_Document>
  contactEmail?: Maybe<Scalars["String"]>
  contactPhone?: Maybe<Scalars["String"]>
  contactAddress?: Maybe<Scalars["String"]>
  contactWhatsapp?: Maybe<Scalars["String"]>
}

export type SiteSetting_ContractDocument_Document = {
  __typename?: "SiteSetting_contractDocument_Document"
  document: Scalars["JSON"]
}

export type SiteSetting_ContractDocument_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars["Boolean"]
}

export type SiteSettingWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type SiteSettingWhereInput = {
  AND?: Maybe<Array<SiteSettingWhereInput>>
  OR?: Maybe<Array<SiteSettingWhereInput>>
  NOT?: Maybe<Array<SiteSettingWhereInput>>
  id?: Maybe<IdFilter>
  testMode?: Maybe<BooleanFilter>
  paymentDescriptionTemplate?: Maybe<StringFilter>
  cronResponseRemindPeriodDays?: Maybe<IntNullableFilter>
  cronPaymentRemindPeriodDays?: Maybe<IntNullableFilter>
  onboardingPageCount?: Maybe<IntNullableFilter>
  globalCurrencySymbol?: Maybe<StringFilter>
  feeValue?: Maybe<FloatNullableFilter>
  contactEmail?: Maybe<StringFilter>
  contactPhone?: Maybe<StringFilter>
  contactAddress?: Maybe<StringFilter>
  contactWhatsapp?: Maybe<StringFilter>
}

export type SiteSettingOrderByInput = {
  id?: Maybe<OrderDirection>
  testMode?: Maybe<OrderDirection>
  paymentDescriptionTemplate?: Maybe<OrderDirection>
  cronResponseRemindPeriodDays?: Maybe<OrderDirection>
  cronPaymentRemindPeriodDays?: Maybe<OrderDirection>
  onboardingPageCount?: Maybe<OrderDirection>
  globalCurrencySymbol?: Maybe<OrderDirection>
  feeValue?: Maybe<OrderDirection>
  contactEmail?: Maybe<OrderDirection>
  contactPhone?: Maybe<OrderDirection>
  contactAddress?: Maybe<OrderDirection>
  contactWhatsapp?: Maybe<OrderDirection>
}

export type SiteSettingUpdateInput = {
  testMode?: Maybe<Scalars["Boolean"]>
  paymentDescriptionTemplate?: Maybe<Scalars["String"]>
  cronResponseRemindPeriodDays?: Maybe<Scalars["Int"]>
  cronPaymentRemindPeriodDays?: Maybe<Scalars["Int"]>
  onboardingPageCount?: Maybe<Scalars["Int"]>
  globalCurrencySymbol?: Maybe<Scalars["String"]>
  feeValue?: Maybe<Scalars["Float"]>
  contractDocument?: Maybe<Scalars["JSON"]>
  contactEmail?: Maybe<Scalars["String"]>
  contactPhone?: Maybe<Scalars["String"]>
  contactAddress?: Maybe<Scalars["String"]>
  contactWhatsapp?: Maybe<Scalars["String"]>
}

export type SiteSettingUpdateArgs = {
  where?: SiteSettingWhereUniqueInput
  data: SiteSettingUpdateInput
}

export type SiteSettingCreateInput = {
  testMode?: Maybe<Scalars["Boolean"]>
  paymentDescriptionTemplate?: Maybe<Scalars["String"]>
  cronResponseRemindPeriodDays?: Maybe<Scalars["Int"]>
  cronPaymentRemindPeriodDays?: Maybe<Scalars["Int"]>
  onboardingPageCount?: Maybe<Scalars["Int"]>
  globalCurrencySymbol?: Maybe<Scalars["String"]>
  feeValue?: Maybe<Scalars["Float"]>
  contractDocument?: Maybe<Scalars["JSON"]>
  contactEmail?: Maybe<Scalars["String"]>
  contactPhone?: Maybe<Scalars["String"]>
  contactAddress?: Maybe<Scalars["String"]>
  contactWhatsapp?: Maybe<Scalars["String"]>
}

export type VerifyCode = {
  __typename?: "VerifyCode"
  id: Scalars["ID"]
  phoneNumber?: Maybe<Scalars["String"]>
  token?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type VerifyCodeWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
  phoneNumber?: Maybe<Scalars["String"]>
  token?: Maybe<Scalars["String"]>
}

export type VerifyCodeWhereInput = {
  AND?: Maybe<Array<VerifyCodeWhereInput>>
  OR?: Maybe<Array<VerifyCodeWhereInput>>
  NOT?: Maybe<Array<VerifyCodeWhereInput>>
  id?: Maybe<IdFilter>
  phoneNumber?: Maybe<StringFilter>
  token?: Maybe<StringFilter>
  code?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
}

export type VerifyCodeOrderByInput = {
  id?: Maybe<OrderDirection>
  phoneNumber?: Maybe<OrderDirection>
  token?: Maybe<OrderDirection>
  code?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
}

export type VerifyCodeUpdateInput = {
  phoneNumber?: Maybe<Scalars["String"]>
  token?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type VerifyCodeUpdateArgs = {
  where: VerifyCodeWhereUniqueInput
  data: VerifyCodeUpdateInput
}

export type VerifyCodeCreateInput = {
  phoneNumber?: Maybe<Scalars["String"]>
  token?: Maybe<Scalars["String"]>
  code?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
}

export type Menu = {
  __typename?: "Menu"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  menuItems?: Maybe<Array<MenuItem>>
  menuItemsCount?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type MenuMenuItemsArgs = {
  where?: MenuItemWhereInput
  orderBy?: Array<MenuItemOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<MenuItemWhereUniqueInput>
}

export type MenuMenuItemsCountArgs = {
  where?: MenuItemWhereInput
}

export type MenuWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
  slug?: Maybe<Scalars["String"]>
}

export type MenuWhereInput = {
  AND?: Maybe<Array<MenuWhereInput>>
  OR?: Maybe<Array<MenuWhereInput>>
  NOT?: Maybe<Array<MenuWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  menuItems?: Maybe<MenuItemManyRelationFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
}

export type MenuItemManyRelationFilter = {
  every?: Maybe<MenuItemWhereInput>
  some?: Maybe<MenuItemWhereInput>
  none?: Maybe<MenuItemWhereInput>
}

export type MenuOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  slug?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
}

export type MenuUpdateInput = {
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  menuItems?: Maybe<MenuItemRelateToManyForUpdateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type MenuItemRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<MenuItemWhereUniqueInput>>
  set?: Maybe<Array<MenuItemWhereUniqueInput>>
  create?: Maybe<Array<MenuItemCreateInput>>
  connect?: Maybe<Array<MenuItemWhereUniqueInput>>
}

export type MenuUpdateArgs = {
  where: MenuWhereUniqueInput
  data: MenuUpdateInput
}

export type MenuCreateInput = {
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  menuItems?: Maybe<MenuItemRelateToManyForCreateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type MenuItemRelateToManyForCreateInput = {
  create?: Maybe<Array<MenuItemCreateInput>>
  connect?: Maybe<Array<MenuItemWhereUniqueInput>>
}

export type MenuItem = {
  __typename?: "MenuItem"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  iconClassName?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type MenuItemWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type MenuItemWhereInput = {
  AND?: Maybe<Array<MenuItemWhereInput>>
  OR?: Maybe<Array<MenuItemWhereInput>>
  NOT?: Maybe<Array<MenuItemWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  iconClassName?: Maybe<StringNullableFilter>
  url?: Maybe<StringFilter>
  target?: Maybe<StringNullableFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
}

export type MenuItemOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  iconClassName?: Maybe<OrderDirection>
  url?: Maybe<OrderDirection>
  target?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
}

export type MenuItemUpdateInput = {
  name?: Maybe<Scalars["String"]>
  iconClassName?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type MenuItemUpdateArgs = {
  where: MenuItemWhereUniqueInput
  data: MenuItemUpdateInput
}

export type MenuItemCreateInput = {
  name?: Maybe<Scalars["String"]>
  iconClassName?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  target?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type System = {
  __typename?: "System"
  id: Scalars["ID"]
  order?: Maybe<Scalars["Int"]>
  paymentOrder?: Maybe<Scalars["Int"]>
}

export type SystemWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type SystemWhereInput = {
  AND?: Maybe<Array<SystemWhereInput>>
  OR?: Maybe<Array<SystemWhereInput>>
  NOT?: Maybe<Array<SystemWhereInput>>
  id?: Maybe<IdFilter>
  order?: Maybe<IntNullableFilter>
  paymentOrder?: Maybe<IntNullableFilter>
}

export type SystemOrderByInput = {
  id?: Maybe<OrderDirection>
  order?: Maybe<OrderDirection>
  paymentOrder?: Maybe<OrderDirection>
}

export type SystemUpdateInput = {
  order?: Maybe<Scalars["Int"]>
  paymentOrder?: Maybe<Scalars["Int"]>
}

export type SystemUpdateArgs = {
  where?: SystemWhereUniqueInput
  data: SystemUpdateInput
}

export type SystemCreateInput = {
  order?: Maybe<Scalars["Int"]>
  paymentOrder?: Maybe<Scalars["Int"]>
}

export type Post = {
  __typename?: "Post"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  content?: Maybe<Post_Content_Document>
  videoSource?: Maybe<Scalars["String"]>
  posterSource?: Maybe<ImageFieldOutput>
  language?: Maybe<Scalars["String"]>
}

export type Post_Content_Document = {
  __typename?: "Post_content_Document"
  document: Scalars["JSON"]
}

export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars["Boolean"]
}

export type ImageFieldOutput = {
  __typename?: "ImageFieldOutput"
  id: Scalars["ID"]
  filesize: Scalars["Int"]
  width: Scalars["Int"]
  height: Scalars["Int"]
  extension: ImageExtension
  url: Scalars["String"]
}

export enum ImageExtension {
  Jpg = "jpg",
  Png = "png",
  Webp = "webp",
  Gif = "gif"
}

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>
  OR?: Maybe<Array<PostWhereInput>>
  NOT?: Maybe<Array<PostWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  videoSource?: Maybe<StringFilter>
  language?: Maybe<StringNullableFilter>
}

export type PostOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  description?: Maybe<OrderDirection>
  videoSource?: Maybe<OrderDirection>
  language?: Maybe<OrderDirection>
}

export type PostUpdateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  content?: Maybe<Scalars["JSON"]>
  videoSource?: Maybe<Scalars["String"]>
  posterSource?: Maybe<ImageFieldInput>
  language?: Maybe<Scalars["String"]>
}

export type ImageFieldInput = {
  upload: Scalars["Upload"]
}

export type PostUpdateArgs = {
  where: PostWhereUniqueInput
  data: PostUpdateInput
}

export type PostCreateInput = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  content?: Maybe<Scalars["JSON"]>
  videoSource?: Maybe<Scalars["String"]>
  posterSource?: Maybe<ImageFieldInput>
  language?: Maybe<Scalars["String"]>
}

export type Faq = {
  __typename?: "FAQ"
  id: Scalars["ID"]
  question?: Maybe<Scalars["String"]>
  answer?: Maybe<Scalars["String"]>
  language?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
}

export type FaqWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type FaqWhereInput = {
  AND?: Maybe<Array<FaqWhereInput>>
  OR?: Maybe<Array<FaqWhereInput>>
  NOT?: Maybe<Array<FaqWhereInput>>
  id?: Maybe<IdFilter>
  question?: Maybe<StringFilter>
  answer?: Maybe<StringFilter>
  language?: Maybe<StringNullableFilter>
  order?: Maybe<IntNullableFilter>
}

export type FaqOrderByInput = {
  id?: Maybe<OrderDirection>
  question?: Maybe<OrderDirection>
  answer?: Maybe<OrderDirection>
  language?: Maybe<OrderDirection>
  order?: Maybe<OrderDirection>
}

export type FaqUpdateInput = {
  question?: Maybe<Scalars["String"]>
  answer?: Maybe<Scalars["String"]>
  language?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
}

export type FaqUpdateArgs = {
  where: FaqWhereUniqueInput
  data: FaqUpdateInput
}

export type FaqCreateInput = {
  question?: Maybe<Scalars["String"]>
  answer?: Maybe<Scalars["String"]>
  language?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
}

export type DocumentType = {
  __typename?: "DocumentType"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  ref?: Maybe<DocumentTypeRefType>
  documents?: Maybe<Array<Document>>
  documentsCount?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  order?: Maybe<Scalars["Int"]>
}

export type DocumentTypeDocumentsArgs = {
  where?: DocumentWhereInput
  orderBy?: Array<DocumentOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<DocumentWhereUniqueInput>
}

export type DocumentTypeDocumentsCountArgs = {
  where?: DocumentWhereInput
}

export enum DocumentTypeRefType {
  Company = "COMPANY",
  Contract = "CONTRACT"
}

export type DocumentTypeWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
  name?: Maybe<Scalars["String"]>
}

export type DocumentTypeWhereInput = {
  AND?: Maybe<Array<DocumentTypeWhereInput>>
  OR?: Maybe<Array<DocumentTypeWhereInput>>
  NOT?: Maybe<Array<DocumentTypeWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  ref?: Maybe<DocumentTypeRefTypeNullableFilter>
  documents?: Maybe<DocumentManyRelationFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  order?: Maybe<IntNullableFilter>
}

export type DocumentTypeRefTypeNullableFilter = {
  equals?: Maybe<DocumentTypeRefType>
  in?: Maybe<Array<DocumentTypeRefType>>
  notIn?: Maybe<Array<DocumentTypeRefType>>
  not?: Maybe<DocumentTypeRefTypeNullableFilter>
}

export type DocumentTypeOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  ref?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  order?: Maybe<OrderDirection>
}

export type DocumentTypeUpdateInput = {
  name?: Maybe<Scalars["String"]>
  ref?: Maybe<DocumentTypeRefType>
  documents?: Maybe<DocumentRelateToManyForUpdateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  order?: Maybe<Scalars["Int"]>
}

export type DocumentTypeUpdateArgs = {
  where: DocumentTypeWhereUniqueInput
  data: DocumentTypeUpdateInput
}

export type DocumentTypeCreateInput = {
  name?: Maybe<Scalars["String"]>
  ref?: Maybe<DocumentTypeRefType>
  documents?: Maybe<DocumentRelateToManyForCreateInput>
  createdAt?: Maybe<Scalars["DateTime"]>
  order?: Maybe<Scalars["Int"]>
}

export type Page = {
  __typename?: "Page"
  id: Scalars["ID"]
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  content?: Maybe<Page_Content_Document>
  language?: Maybe<Scalars["String"]>
  publishedAt?: Maybe<Scalars["DateTime"]>
  publishStatus?: Maybe<PagePublishStatusType>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type Page_Content_Document = {
  __typename?: "Page_content_Document"
  document: Scalars["JSON"]
}

export type Page_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars["Boolean"]
}

export enum PagePublishStatusType {
  Draft = "DRAFT",
  Published = "PUBLISHED"
}

export type PageWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>
}

export type PageWhereInput = {
  AND?: Maybe<Array<PageWhereInput>>
  OR?: Maybe<Array<PageWhereInput>>
  NOT?: Maybe<Array<PageWhereInput>>
  id?: Maybe<IdFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  language?: Maybe<StringNullableFilter>
  publishedAt?: Maybe<DateTimeNullableFilter>
  publishStatus?: Maybe<PagePublishStatusTypeNullableFilter>
  createdAt?: Maybe<DateTimeNullableFilter>
  updatedAt?: Maybe<DateTimeNullableFilter>
}

export type PagePublishStatusTypeNullableFilter = {
  equals?: Maybe<PagePublishStatusType>
  in?: Maybe<Array<PagePublishStatusType>>
  notIn?: Maybe<Array<PagePublishStatusType>>
  not?: Maybe<PagePublishStatusTypeNullableFilter>
}

export type PageOrderByInput = {
  id?: Maybe<OrderDirection>
  name?: Maybe<OrderDirection>
  slug?: Maybe<OrderDirection>
  language?: Maybe<OrderDirection>
  publishedAt?: Maybe<OrderDirection>
  publishStatus?: Maybe<OrderDirection>
  createdAt?: Maybe<OrderDirection>
  updatedAt?: Maybe<OrderDirection>
}

export type PageUpdateInput = {
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  content?: Maybe<Scalars["JSON"]>
  language?: Maybe<Scalars["String"]>
  publishedAt?: Maybe<Scalars["DateTime"]>
  publishStatus?: Maybe<PagePublishStatusType>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type PageUpdateArgs = {
  where: PageWhereUniqueInput
  data: PageUpdateInput
}

export type PageCreateInput = {
  name?: Maybe<Scalars["String"]>
  slug?: Maybe<Scalars["String"]>
  content?: Maybe<Scalars["JSON"]>
  language?: Maybe<Scalars["String"]>
  publishedAt?: Maybe<Scalars["DateTime"]>
  publishStatus?: Maybe<PagePublishStatusType>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type Mutation = {
  __typename?: "Mutation"
  createOffer?: Maybe<Offer>
  createOffers?: Maybe<Array<Maybe<Offer>>>
  updateOffer?: Maybe<Offer>
  updateOffers?: Maybe<Array<Maybe<Offer>>>
  deleteOffer?: Maybe<Offer>
  deleteOffers?: Maybe<Array<Maybe<Offer>>>
  createBank?: Maybe<Bank>
  createBanks?: Maybe<Array<Maybe<Bank>>>
  updateBank?: Maybe<Bank>
  updateBanks?: Maybe<Array<Maybe<Bank>>>
  deleteBank?: Maybe<Bank>
  deleteBanks?: Maybe<Array<Maybe<Bank>>>
  createUser?: Maybe<User>
  createUsers?: Maybe<Array<Maybe<User>>>
  updateUser?: Maybe<User>
  updateUsers?: Maybe<Array<Maybe<User>>>
  deleteUser?: Maybe<User>
  deleteUsers?: Maybe<Array<Maybe<User>>>
  createContactFormSubject?: Maybe<ContactFormSubject>
  createContactFormSubjects?: Maybe<Array<Maybe<ContactFormSubject>>>
  updateContactFormSubject?: Maybe<ContactFormSubject>
  updateContactFormSubjects?: Maybe<Array<Maybe<ContactFormSubject>>>
  deleteContactFormSubject?: Maybe<ContactFormSubject>
  deleteContactFormSubjects?: Maybe<Array<Maybe<ContactFormSubject>>>
  createContactFormSubmission?: Maybe<ContactFormSubmission>
  createContactFormSubmissions?: Maybe<Array<Maybe<ContactFormSubmission>>>
  updateContactFormSubmission?: Maybe<ContactFormSubmission>
  updateContactFormSubmissions?: Maybe<Array<Maybe<ContactFormSubmission>>>
  deleteContactFormSubmission?: Maybe<ContactFormSubmission>
  deleteContactFormSubmissions?: Maybe<Array<Maybe<ContactFormSubmission>>>
  createDocument?: Maybe<Document>
  createDocuments?: Maybe<Array<Maybe<Document>>>
  updateDocument?: Maybe<Document>
  updateDocuments?: Maybe<Array<Maybe<Document>>>
  deleteDocument?: Maybe<Document>
  deleteDocuments?: Maybe<Array<Maybe<Document>>>
  createBusinessCategory?: Maybe<BusinessCategory>
  createBusinessCategories?: Maybe<Array<Maybe<BusinessCategory>>>
  updateBusinessCategory?: Maybe<BusinessCategory>
  updateBusinessCategories?: Maybe<Array<Maybe<BusinessCategory>>>
  deleteBusinessCategory?: Maybe<BusinessCategory>
  deleteBusinessCategories?: Maybe<Array<Maybe<BusinessCategory>>>
  createCompany?: Maybe<Company>
  createCompanies?: Maybe<Array<Maybe<Company>>>
  updateCompany?: Maybe<Company>
  updateCompanies?: Maybe<Array<Maybe<Company>>>
  deleteCompany?: Maybe<Company>
  deleteCompanies?: Maybe<Array<Maybe<Company>>>
  createCharityAssociation?: Maybe<CharityAssociation>
  createCharityAssociations?: Maybe<Array<Maybe<CharityAssociation>>>
  updateCharityAssociation?: Maybe<CharityAssociation>
  updateCharityAssociations?: Maybe<Array<Maybe<CharityAssociation>>>
  deleteCharityAssociation?: Maybe<CharityAssociation>
  deleteCharityAssociations?: Maybe<Array<Maybe<CharityAssociation>>>
  createAdminContractComment?: Maybe<AdminContractComment>
  createAdminContractComments?: Maybe<Array<Maybe<AdminContractComment>>>
  updateAdminContractComment?: Maybe<AdminContractComment>
  updateAdminContractComments?: Maybe<Array<Maybe<AdminContractComment>>>
  deleteAdminContractComment?: Maybe<AdminContractComment>
  deleteAdminContractComments?: Maybe<Array<Maybe<AdminContractComment>>>
  createContractRejectReason?: Maybe<ContractRejectReason>
  createContractRejectReasons?: Maybe<Array<Maybe<ContractRejectReason>>>
  updateContractRejectReason?: Maybe<ContractRejectReason>
  updateContractRejectReasons?: Maybe<Array<Maybe<ContractRejectReason>>>
  deleteContractRejectReason?: Maybe<ContractRejectReason>
  deleteContractRejectReasons?: Maybe<Array<Maybe<ContractRejectReason>>>
  createContract?: Maybe<Contract>
  createContracts?: Maybe<Array<Maybe<Contract>>>
  updateContract?: Maybe<Contract>
  updateContracts?: Maybe<Array<Maybe<Contract>>>
  deleteContract?: Maybe<Contract>
  deleteContracts?: Maybe<Array<Maybe<Contract>>>
  createCronTask?: Maybe<CronTask>
  createCronTasks?: Maybe<Array<Maybe<CronTask>>>
  updateCronTask?: Maybe<CronTask>
  updateCronTasks?: Maybe<Array<Maybe<CronTask>>>
  deleteCronTask?: Maybe<CronTask>
  deleteCronTasks?: Maybe<Array<Maybe<CronTask>>>
  createCronLog?: Maybe<CronLog>
  createCronLogs?: Maybe<Array<Maybe<CronLog>>>
  updateCronLog?: Maybe<CronLog>
  updateCronLogs?: Maybe<Array<Maybe<CronLog>>>
  deleteCronLog?: Maybe<CronLog>
  deleteCronLogs?: Maybe<Array<Maybe<CronLog>>>
  createNotificationTemplate?: Maybe<NotificationTemplate>
  createNotificationTemplates?: Maybe<Array<Maybe<NotificationTemplate>>>
  updateNotificationTemplate?: Maybe<NotificationTemplate>
  updateNotificationTemplates?: Maybe<Array<Maybe<NotificationTemplate>>>
  deleteNotificationTemplate?: Maybe<NotificationTemplate>
  deleteNotificationTemplates?: Maybe<Array<Maybe<NotificationTemplate>>>
  createNotification?: Maybe<Notification>
  createNotifications?: Maybe<Array<Maybe<Notification>>>
  updateNotification?: Maybe<Notification>
  updateNotifications?: Maybe<Array<Maybe<Notification>>>
  deleteNotification?: Maybe<Notification>
  deleteNotifications?: Maybe<Array<Maybe<Notification>>>
  createTransaction?: Maybe<Transaction>
  createTransactions?: Maybe<Array<Maybe<Transaction>>>
  updateTransaction?: Maybe<Transaction>
  updateTransactions?: Maybe<Array<Maybe<Transaction>>>
  deleteTransaction?: Maybe<Transaction>
  deleteTransactions?: Maybe<Array<Maybe<Transaction>>>
  createSiteSetting?: Maybe<SiteSetting>
  createSiteSettings?: Maybe<Array<Maybe<SiteSetting>>>
  updateSiteSetting?: Maybe<SiteSetting>
  updateSiteSettings?: Maybe<Array<Maybe<SiteSetting>>>
  deleteSiteSetting?: Maybe<SiteSetting>
  deleteSiteSettings?: Maybe<Array<Maybe<SiteSetting>>>
  createVerifyCode?: Maybe<VerifyCode>
  createVerifyCodes?: Maybe<Array<Maybe<VerifyCode>>>
  updateVerifyCode?: Maybe<VerifyCode>
  updateVerifyCodes?: Maybe<Array<Maybe<VerifyCode>>>
  deleteVerifyCode?: Maybe<VerifyCode>
  deleteVerifyCodes?: Maybe<Array<Maybe<VerifyCode>>>
  createMenu?: Maybe<Menu>
  createMenus?: Maybe<Array<Maybe<Menu>>>
  updateMenu?: Maybe<Menu>
  updateMenus?: Maybe<Array<Maybe<Menu>>>
  deleteMenu?: Maybe<Menu>
  deleteMenus?: Maybe<Array<Maybe<Menu>>>
  createMenuItem?: Maybe<MenuItem>
  createMenuItems?: Maybe<Array<Maybe<MenuItem>>>
  updateMenuItem?: Maybe<MenuItem>
  updateMenuItems?: Maybe<Array<Maybe<MenuItem>>>
  deleteMenuItem?: Maybe<MenuItem>
  deleteMenuItems?: Maybe<Array<Maybe<MenuItem>>>
  createSystem?: Maybe<System>
  createSystems?: Maybe<Array<Maybe<System>>>
  updateSystem?: Maybe<System>
  updateSystems?: Maybe<Array<Maybe<System>>>
  deleteSystem?: Maybe<System>
  deleteSystems?: Maybe<Array<Maybe<System>>>
  createPost?: Maybe<Post>
  createPosts?: Maybe<Array<Maybe<Post>>>
  updatePost?: Maybe<Post>
  updatePosts?: Maybe<Array<Maybe<Post>>>
  deletePost?: Maybe<Post>
  deletePosts?: Maybe<Array<Maybe<Post>>>
  createFAQ?: Maybe<Faq>
  createFAQs?: Maybe<Array<Maybe<Faq>>>
  updateFAQ?: Maybe<Faq>
  updateFAQs?: Maybe<Array<Maybe<Faq>>>
  deleteFAQ?: Maybe<Faq>
  deleteFAQs?: Maybe<Array<Maybe<Faq>>>
  createDocumentType?: Maybe<DocumentType>
  createDocumentTypes?: Maybe<Array<Maybe<DocumentType>>>
  updateDocumentType?: Maybe<DocumentType>
  updateDocumentTypes?: Maybe<Array<Maybe<DocumentType>>>
  deleteDocumentType?: Maybe<DocumentType>
  deleteDocumentTypes?: Maybe<Array<Maybe<DocumentType>>>
  createPage?: Maybe<Page>
  createPages?: Maybe<Array<Maybe<Page>>>
  updatePage?: Maybe<Page>
  updatePages?: Maybe<Array<Maybe<Page>>>
  deletePage?: Maybe<Page>
  deletePages?: Maybe<Array<Maybe<Page>>>
  endSession: Scalars["Boolean"]
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>
  createInitialUser: UserAuthenticationWithPasswordSuccess
  rejectCardPayment: Scalars["Boolean"]
  getCreditCardPaymentUrl: Scalars["String"]
  signIn?: Maybe<Scalars["JSON"]>
  authenticateUserWithPhoneNumber?: Maybe<Scalars["String"]>
}

export type MutationCreateOfferArgs = {
  data: OfferCreateInput
}

export type MutationCreateOffersArgs = {
  data: Array<OfferCreateInput>
}

export type MutationUpdateOfferArgs = {
  where: OfferWhereUniqueInput
  data: OfferUpdateInput
}

export type MutationUpdateOffersArgs = {
  data: Array<OfferUpdateArgs>
}

export type MutationDeleteOfferArgs = {
  where: OfferWhereUniqueInput
}

export type MutationDeleteOffersArgs = {
  where: Array<OfferWhereUniqueInput>
}

export type MutationCreateBankArgs = {
  data: BankCreateInput
}

export type MutationCreateBanksArgs = {
  data: Array<BankCreateInput>
}

export type MutationUpdateBankArgs = {
  where: BankWhereUniqueInput
  data: BankUpdateInput
}

export type MutationUpdateBanksArgs = {
  data: Array<BankUpdateArgs>
}

export type MutationDeleteBankArgs = {
  where: BankWhereUniqueInput
}

export type MutationDeleteBanksArgs = {
  where: Array<BankWhereUniqueInput>
}

export type MutationCreateUserArgs = {
  data: UserCreateInput
}

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>
}

export type MutationUpdateUserArgs = {
  where: UserWhereUniqueInput
  data: UserUpdateInput
}

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>
}

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>
}

export type MutationCreateContactFormSubjectArgs = {
  data: ContactFormSubjectCreateInput
}

export type MutationCreateContactFormSubjectsArgs = {
  data: Array<ContactFormSubjectCreateInput>
}

export type MutationUpdateContactFormSubjectArgs = {
  where: ContactFormSubjectWhereUniqueInput
  data: ContactFormSubjectUpdateInput
}

export type MutationUpdateContactFormSubjectsArgs = {
  data: Array<ContactFormSubjectUpdateArgs>
}

export type MutationDeleteContactFormSubjectArgs = {
  where: ContactFormSubjectWhereUniqueInput
}

export type MutationDeleteContactFormSubjectsArgs = {
  where: Array<ContactFormSubjectWhereUniqueInput>
}

export type MutationCreateContactFormSubmissionArgs = {
  data: ContactFormSubmissionCreateInput
}

export type MutationCreateContactFormSubmissionsArgs = {
  data: Array<ContactFormSubmissionCreateInput>
}

export type MutationUpdateContactFormSubmissionArgs = {
  where: ContactFormSubmissionWhereUniqueInput
  data: ContactFormSubmissionUpdateInput
}

export type MutationUpdateContactFormSubmissionsArgs = {
  data: Array<ContactFormSubmissionUpdateArgs>
}

export type MutationDeleteContactFormSubmissionArgs = {
  where: ContactFormSubmissionWhereUniqueInput
}

export type MutationDeleteContactFormSubmissionsArgs = {
  where: Array<ContactFormSubmissionWhereUniqueInput>
}

export type MutationCreateDocumentArgs = {
  data: DocumentCreateInput
}

export type MutationCreateDocumentsArgs = {
  data: Array<DocumentCreateInput>
}

export type MutationUpdateDocumentArgs = {
  where: DocumentWhereUniqueInput
  data: DocumentUpdateInput
}

export type MutationUpdateDocumentsArgs = {
  data: Array<DocumentUpdateArgs>
}

export type MutationDeleteDocumentArgs = {
  where: DocumentWhereUniqueInput
}

export type MutationDeleteDocumentsArgs = {
  where: Array<DocumentWhereUniqueInput>
}

export type MutationCreateBusinessCategoryArgs = {
  data: BusinessCategoryCreateInput
}

export type MutationCreateBusinessCategoriesArgs = {
  data: Array<BusinessCategoryCreateInput>
}

export type MutationUpdateBusinessCategoryArgs = {
  where: BusinessCategoryWhereUniqueInput
  data: BusinessCategoryUpdateInput
}

export type MutationUpdateBusinessCategoriesArgs = {
  data: Array<BusinessCategoryUpdateArgs>
}

export type MutationDeleteBusinessCategoryArgs = {
  where: BusinessCategoryWhereUniqueInput
}

export type MutationDeleteBusinessCategoriesArgs = {
  where: Array<BusinessCategoryWhereUniqueInput>
}

export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput
}

export type MutationCreateCompaniesArgs = {
  data: Array<CompanyCreateInput>
}

export type MutationUpdateCompanyArgs = {
  where: CompanyWhereUniqueInput
  data: CompanyUpdateInput
}

export type MutationUpdateCompaniesArgs = {
  data: Array<CompanyUpdateArgs>
}

export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type MutationDeleteCompaniesArgs = {
  where: Array<CompanyWhereUniqueInput>
}

export type MutationCreateCharityAssociationArgs = {
  data: CharityAssociationCreateInput
}

export type MutationCreateCharityAssociationsArgs = {
  data: Array<CharityAssociationCreateInput>
}

export type MutationUpdateCharityAssociationArgs = {
  where: CharityAssociationWhereUniqueInput
  data: CharityAssociationUpdateInput
}

export type MutationUpdateCharityAssociationsArgs = {
  data: Array<CharityAssociationUpdateArgs>
}

export type MutationDeleteCharityAssociationArgs = {
  where: CharityAssociationWhereUniqueInput
}

export type MutationDeleteCharityAssociationsArgs = {
  where: Array<CharityAssociationWhereUniqueInput>
}

export type MutationCreateAdminContractCommentArgs = {
  data: AdminContractCommentCreateInput
}

export type MutationCreateAdminContractCommentsArgs = {
  data: Array<AdminContractCommentCreateInput>
}

export type MutationUpdateAdminContractCommentArgs = {
  where: AdminContractCommentWhereUniqueInput
  data: AdminContractCommentUpdateInput
}

export type MutationUpdateAdminContractCommentsArgs = {
  data: Array<AdminContractCommentUpdateArgs>
}

export type MutationDeleteAdminContractCommentArgs = {
  where: AdminContractCommentWhereUniqueInput
}

export type MutationDeleteAdminContractCommentsArgs = {
  where: Array<AdminContractCommentWhereUniqueInput>
}

export type MutationCreateContractRejectReasonArgs = {
  data: ContractRejectReasonCreateInput
}

export type MutationCreateContractRejectReasonsArgs = {
  data: Array<ContractRejectReasonCreateInput>
}

export type MutationUpdateContractRejectReasonArgs = {
  where: ContractRejectReasonWhereUniqueInput
  data: ContractRejectReasonUpdateInput
}

export type MutationUpdateContractRejectReasonsArgs = {
  data: Array<ContractRejectReasonUpdateArgs>
}

export type MutationDeleteContractRejectReasonArgs = {
  where: ContractRejectReasonWhereUniqueInput
}

export type MutationDeleteContractRejectReasonsArgs = {
  where: Array<ContractRejectReasonWhereUniqueInput>
}

export type MutationCreateContractArgs = {
  data: ContractCreateInput
}

export type MutationCreateContractsArgs = {
  data: Array<ContractCreateInput>
}

export type MutationUpdateContractArgs = {
  where: ContractWhereUniqueInput
  data: ContractUpdateInput
}

export type MutationUpdateContractsArgs = {
  data: Array<ContractUpdateArgs>
}

export type MutationDeleteContractArgs = {
  where: ContractWhereUniqueInput
}

export type MutationDeleteContractsArgs = {
  where: Array<ContractWhereUniqueInput>
}

export type MutationCreateCronTaskArgs = {
  data: CronTaskCreateInput
}

export type MutationCreateCronTasksArgs = {
  data: Array<CronTaskCreateInput>
}

export type MutationUpdateCronTaskArgs = {
  where: CronTaskWhereUniqueInput
  data: CronTaskUpdateInput
}

export type MutationUpdateCronTasksArgs = {
  data: Array<CronTaskUpdateArgs>
}

export type MutationDeleteCronTaskArgs = {
  where: CronTaskWhereUniqueInput
}

export type MutationDeleteCronTasksArgs = {
  where: Array<CronTaskWhereUniqueInput>
}

export type MutationCreateCronLogArgs = {
  data: CronLogCreateInput
}

export type MutationCreateCronLogsArgs = {
  data: Array<CronLogCreateInput>
}

export type MutationUpdateCronLogArgs = {
  where: CronLogWhereUniqueInput
  data: CronLogUpdateInput
}

export type MutationUpdateCronLogsArgs = {
  data: Array<CronLogUpdateArgs>
}

export type MutationDeleteCronLogArgs = {
  where: CronLogWhereUniqueInput
}

export type MutationDeleteCronLogsArgs = {
  where: Array<CronLogWhereUniqueInput>
}

export type MutationCreateNotificationTemplateArgs = {
  data: NotificationTemplateCreateInput
}

export type MutationCreateNotificationTemplatesArgs = {
  data: Array<NotificationTemplateCreateInput>
}

export type MutationUpdateNotificationTemplateArgs = {
  where: NotificationTemplateWhereUniqueInput
  data: NotificationTemplateUpdateInput
}

export type MutationUpdateNotificationTemplatesArgs = {
  data: Array<NotificationTemplateUpdateArgs>
}

export type MutationDeleteNotificationTemplateArgs = {
  where: NotificationTemplateWhereUniqueInput
}

export type MutationDeleteNotificationTemplatesArgs = {
  where: Array<NotificationTemplateWhereUniqueInput>
}

export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput
}

export type MutationCreateNotificationsArgs = {
  data: Array<NotificationCreateInput>
}

export type MutationUpdateNotificationArgs = {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateInput
}

export type MutationUpdateNotificationsArgs = {
  data: Array<NotificationUpdateArgs>
}

export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput
}

export type MutationDeleteNotificationsArgs = {
  where: Array<NotificationWhereUniqueInput>
}

export type MutationCreateTransactionArgs = {
  data: TransactionCreateInput
}

export type MutationCreateTransactionsArgs = {
  data: Array<TransactionCreateInput>
}

export type MutationUpdateTransactionArgs = {
  where: TransactionWhereUniqueInput
  data: TransactionUpdateInput
}

export type MutationUpdateTransactionsArgs = {
  data: Array<TransactionUpdateArgs>
}

export type MutationDeleteTransactionArgs = {
  where: TransactionWhereUniqueInput
}

export type MutationDeleteTransactionsArgs = {
  where: Array<TransactionWhereUniqueInput>
}

export type MutationCreateSiteSettingArgs = {
  data: SiteSettingCreateInput
}

export type MutationCreateSiteSettingsArgs = {
  data: Array<SiteSettingCreateInput>
}

export type MutationUpdateSiteSettingArgs = {
  where?: SiteSettingWhereUniqueInput
  data: SiteSettingUpdateInput
}

export type MutationUpdateSiteSettingsArgs = {
  data: Array<SiteSettingUpdateArgs>
}

export type MutationDeleteSiteSettingArgs = {
  where?: SiteSettingWhereUniqueInput
}

export type MutationDeleteSiteSettingsArgs = {
  where: Array<SiteSettingWhereUniqueInput>
}

export type MutationCreateVerifyCodeArgs = {
  data: VerifyCodeCreateInput
}

export type MutationCreateVerifyCodesArgs = {
  data: Array<VerifyCodeCreateInput>
}

export type MutationUpdateVerifyCodeArgs = {
  where: VerifyCodeWhereUniqueInput
  data: VerifyCodeUpdateInput
}

export type MutationUpdateVerifyCodesArgs = {
  data: Array<VerifyCodeUpdateArgs>
}

export type MutationDeleteVerifyCodeArgs = {
  where: VerifyCodeWhereUniqueInput
}

export type MutationDeleteVerifyCodesArgs = {
  where: Array<VerifyCodeWhereUniqueInput>
}

export type MutationCreateMenuArgs = {
  data: MenuCreateInput
}

export type MutationCreateMenusArgs = {
  data: Array<MenuCreateInput>
}

export type MutationUpdateMenuArgs = {
  where: MenuWhereUniqueInput
  data: MenuUpdateInput
}

export type MutationUpdateMenusArgs = {
  data: Array<MenuUpdateArgs>
}

export type MutationDeleteMenuArgs = {
  where: MenuWhereUniqueInput
}

export type MutationDeleteMenusArgs = {
  where: Array<MenuWhereUniqueInput>
}

export type MutationCreateMenuItemArgs = {
  data: MenuItemCreateInput
}

export type MutationCreateMenuItemsArgs = {
  data: Array<MenuItemCreateInput>
}

export type MutationUpdateMenuItemArgs = {
  where: MenuItemWhereUniqueInput
  data: MenuItemUpdateInput
}

export type MutationUpdateMenuItemsArgs = {
  data: Array<MenuItemUpdateArgs>
}

export type MutationDeleteMenuItemArgs = {
  where: MenuItemWhereUniqueInput
}

export type MutationDeleteMenuItemsArgs = {
  where: Array<MenuItemWhereUniqueInput>
}

export type MutationCreateSystemArgs = {
  data: SystemCreateInput
}

export type MutationCreateSystemsArgs = {
  data: Array<SystemCreateInput>
}

export type MutationUpdateSystemArgs = {
  where?: SystemWhereUniqueInput
  data: SystemUpdateInput
}

export type MutationUpdateSystemsArgs = {
  data: Array<SystemUpdateArgs>
}

export type MutationDeleteSystemArgs = {
  where?: SystemWhereUniqueInput
}

export type MutationDeleteSystemsArgs = {
  where: Array<SystemWhereUniqueInput>
}

export type MutationCreatePostArgs = {
  data: PostCreateInput
}

export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>
}

export type MutationUpdatePostArgs = {
  where: PostWhereUniqueInput
  data: PostUpdateInput
}

export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>
}

export type MutationCreateFaqArgs = {
  data: FaqCreateInput
}

export type MutationCreateFaQsArgs = {
  data: Array<FaqCreateInput>
}

export type MutationUpdateFaqArgs = {
  where: FaqWhereUniqueInput
  data: FaqUpdateInput
}

export type MutationUpdateFaQsArgs = {
  data: Array<FaqUpdateArgs>
}

export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput
}

export type MutationDeleteFaQsArgs = {
  where: Array<FaqWhereUniqueInput>
}

export type MutationCreateDocumentTypeArgs = {
  data: DocumentTypeCreateInput
}

export type MutationCreateDocumentTypesArgs = {
  data: Array<DocumentTypeCreateInput>
}

export type MutationUpdateDocumentTypeArgs = {
  where: DocumentTypeWhereUniqueInput
  data: DocumentTypeUpdateInput
}

export type MutationUpdateDocumentTypesArgs = {
  data: Array<DocumentTypeUpdateArgs>
}

export type MutationDeleteDocumentTypeArgs = {
  where: DocumentTypeWhereUniqueInput
}

export type MutationDeleteDocumentTypesArgs = {
  where: Array<DocumentTypeWhereUniqueInput>
}

export type MutationCreatePageArgs = {
  data: PageCreateInput
}

export type MutationCreatePagesArgs = {
  data: Array<PageCreateInput>
}

export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput
  data: PageUpdateInput
}

export type MutationUpdatePagesArgs = {
  data: Array<PageUpdateArgs>
}

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput
}

export type MutationDeletePagesArgs = {
  where: Array<PageWhereUniqueInput>
}

export type MutationAuthenticateUserWithPasswordArgs = {
  phoneNumber: Scalars["String"]
  password: Scalars["String"]
}

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput
}

export type MutationRejectCardPaymentArgs = {
  orderId: Scalars["ID"]
}

export type MutationGetCreditCardPaymentUrlArgs = {
  orderId: Scalars["ID"]
}

export type MutationSignInArgs = {
  code: Scalars["String"]
  token: Scalars["String"]
}

export type MutationAuthenticateUserWithPhoneNumberArgs = {
  phoneNumber: Scalars["String"]
}

export type UserAuthenticationWithPasswordResult =
    | UserAuthenticationWithPasswordSuccess
    | UserAuthenticationWithPasswordFailure

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess"
  sessionToken: Scalars["String"]
  item: User
}

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure"
  message: Scalars["String"]
}

export type CreateInitialUserInput = {
  name?: Maybe<Scalars["String"]>
  phoneNumber?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  offers?: Maybe<Array<Offer>>
  offer?: Maybe<Offer>
  offersCount?: Maybe<Scalars["Int"]>
  banks?: Maybe<Array<Bank>>
  bank?: Maybe<Bank>
  banksCount?: Maybe<Scalars["Int"]>
  users?: Maybe<Array<User>>
  user?: Maybe<User>
  usersCount?: Maybe<Scalars["Int"]>
  contactFormSubjects?: Maybe<Array<ContactFormSubject>>
  contactFormSubject?: Maybe<ContactFormSubject>
  contactFormSubjectsCount?: Maybe<Scalars["Int"]>
  contactFormSubmissions?: Maybe<Array<ContactFormSubmission>>
  contactFormSubmission?: Maybe<ContactFormSubmission>
  contactFormSubmissionsCount?: Maybe<Scalars["Int"]>
  documents?: Maybe<Array<Document>>
  document?: Maybe<Document>
  documentsCount?: Maybe<Scalars["Int"]>
  businessCategories?: Maybe<Array<BusinessCategory>>
  businessCategory?: Maybe<BusinessCategory>
  businessCategoriesCount?: Maybe<Scalars["Int"]>
  companies?: Maybe<Array<Company>>
  company?: Maybe<Company>
  companiesCount?: Maybe<Scalars["Int"]>
  charityAssociations?: Maybe<Array<CharityAssociation>>
  charityAssociation?: Maybe<CharityAssociation>
  charityAssociationsCount?: Maybe<Scalars["Int"]>
  adminContractComments?: Maybe<Array<AdminContractComment>>
  adminContractComment?: Maybe<AdminContractComment>
  adminContractCommentsCount?: Maybe<Scalars["Int"]>
  contractRejectReasons?: Maybe<Array<ContractRejectReason>>
  contractRejectReason?: Maybe<ContractRejectReason>
  contractRejectReasonsCount?: Maybe<Scalars["Int"]>
  contracts?: Maybe<Array<Contract>>
  contract?: Maybe<Contract>
  contractsCount?: Maybe<Scalars["Int"]>
  cronTasks?: Maybe<Array<CronTask>>
  cronTask?: Maybe<CronTask>
  cronTasksCount?: Maybe<Scalars["Int"]>
  cronLogs?: Maybe<Array<CronLog>>
  cronLog?: Maybe<CronLog>
  cronLogsCount?: Maybe<Scalars["Int"]>
  notificationTemplates?: Maybe<Array<NotificationTemplate>>
  notificationTemplate?: Maybe<NotificationTemplate>
  notificationTemplatesCount?: Maybe<Scalars["Int"]>
  notifications?: Maybe<Array<Notification>>
  notification?: Maybe<Notification>
  notificationsCount?: Maybe<Scalars["Int"]>
  transactions?: Maybe<Array<Transaction>>
  transaction?: Maybe<Transaction>
  transactionsCount?: Maybe<Scalars["Int"]>
  siteSettings?: Maybe<Array<SiteSetting>>
  siteSetting?: Maybe<SiteSetting>
  siteSettingsCount?: Maybe<Scalars["Int"]>
  verifyCodes?: Maybe<Array<VerifyCode>>
  verifyCode?: Maybe<VerifyCode>
  verifyCodesCount?: Maybe<Scalars["Int"]>
  menus?: Maybe<Array<Menu>>
  menu?: Maybe<Menu>
  menusCount?: Maybe<Scalars["Int"]>
  menuItems?: Maybe<Array<MenuItem>>
  menuItem?: Maybe<MenuItem>
  menuItemsCount?: Maybe<Scalars["Int"]>
  systems?: Maybe<Array<System>>
  system?: Maybe<System>
  systemsCount?: Maybe<Scalars["Int"]>
  posts?: Maybe<Array<Post>>
  post?: Maybe<Post>
  postsCount?: Maybe<Scalars["Int"]>
  fAQs?: Maybe<Array<Faq>>
  fAQ?: Maybe<Faq>
  fAQsCount?: Maybe<Scalars["Int"]>
  documentTypes?: Maybe<Array<DocumentType>>
  documentType?: Maybe<DocumentType>
  documentTypesCount?: Maybe<Scalars["Int"]>
  pages?: Maybe<Array<Page>>
  page?: Maybe<Page>
  pagesCount?: Maybe<Scalars["Int"]>
  keystone: KeystoneMeta
  authenticatedItem?: Maybe<AuthenticatedItem>
  statistics?: Maybe<Scalars["JSON"]>
  notificationMesasage?: Maybe<Scalars["JSON"]>
  incomingStatistics?: Maybe<Scalars["JSON"]>
  outgoingStatistics?: Maybe<Scalars["JSON"]>
  me?: Maybe<Scalars["JSON"]>
}

export type QueryOffersArgs = {
  where?: OfferWhereInput
  orderBy?: Array<OfferOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<OfferWhereUniqueInput>
}

export type QueryOfferArgs = {
  where: OfferWhereUniqueInput
}

export type QueryOffersCountArgs = {
  where?: OfferWhereInput
}

export type QueryBanksArgs = {
  where?: BankWhereInput
  orderBy?: Array<BankOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<BankWhereUniqueInput>
}

export type QueryBankArgs = {
  where: BankWhereUniqueInput
}

export type QueryBanksCountArgs = {
  where?: BankWhereInput
}

export type QueryUsersArgs = {
  where?: UserWhereInput
  orderBy?: Array<UserOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<UserWhereUniqueInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersCountArgs = {
  where?: UserWhereInput
}

export type QueryContactFormSubjectsArgs = {
  where?: ContactFormSubjectWhereInput
  orderBy?: Array<ContactFormSubjectOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContactFormSubjectWhereUniqueInput>
}

export type QueryContactFormSubjectArgs = {
  where: ContactFormSubjectWhereUniqueInput
}

export type QueryContactFormSubjectsCountArgs = {
  where?: ContactFormSubjectWhereInput
}

export type QueryContactFormSubmissionsArgs = {
  where?: ContactFormSubmissionWhereInput
  orderBy?: Array<ContactFormSubmissionOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContactFormSubmissionWhereUniqueInput>
}

export type QueryContactFormSubmissionArgs = {
  where: ContactFormSubmissionWhereUniqueInput
}

export type QueryContactFormSubmissionsCountArgs = {
  where?: ContactFormSubmissionWhereInput
}

export type QueryDocumentsArgs = {
  where?: DocumentWhereInput
  orderBy?: Array<DocumentOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<DocumentWhereUniqueInput>
}

export type QueryDocumentArgs = {
  where: DocumentWhereUniqueInput
}

export type QueryDocumentsCountArgs = {
  where?: DocumentWhereInput
}

export type QueryBusinessCategoriesArgs = {
  where?: BusinessCategoryWhereInput
  orderBy?: Array<BusinessCategoryOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<BusinessCategoryWhereUniqueInput>
}

export type QueryBusinessCategoryArgs = {
  where: BusinessCategoryWhereUniqueInput
}

export type QueryBusinessCategoriesCountArgs = {
  where?: BusinessCategoryWhereInput
}

export type QueryCompaniesArgs = {
  where?: CompanyWhereInput
  orderBy?: Array<CompanyOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<CompanyWhereUniqueInput>
}

export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type QueryCompaniesCountArgs = {
  where?: CompanyWhereInput
}

export type QueryCharityAssociationsArgs = {
  where?: CharityAssociationWhereInput
  orderBy?: Array<CharityAssociationOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<CharityAssociationWhereUniqueInput>
}

export type QueryCharityAssociationArgs = {
  where: CharityAssociationWhereUniqueInput
}

export type QueryCharityAssociationsCountArgs = {
  where?: CharityAssociationWhereInput
}

export type QueryAdminContractCommentsArgs = {
  where?: AdminContractCommentWhereInput
  orderBy?: Array<AdminContractCommentOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<AdminContractCommentWhereUniqueInput>
}

export type QueryAdminContractCommentArgs = {
  where: AdminContractCommentWhereUniqueInput
}

export type QueryAdminContractCommentsCountArgs = {
  where?: AdminContractCommentWhereInput
}

export type QueryContractRejectReasonsArgs = {
  where?: ContractRejectReasonWhereInput
  orderBy?: Array<ContractRejectReasonOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContractRejectReasonWhereUniqueInput>
}

export type QueryContractRejectReasonArgs = {
  where: ContractRejectReasonWhereUniqueInput
}

export type QueryContractRejectReasonsCountArgs = {
  where?: ContractRejectReasonWhereInput
}

export type QueryContractsArgs = {
  where?: ContractWhereInput
  orderBy?: Array<ContractOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<ContractWhereUniqueInput>
}

export type QueryContractArgs = {
  where: ContractWhereUniqueInput
}

export type QueryContractsCountArgs = {
  where?: ContractWhereInput
}

export type QueryCronTasksArgs = {
  where?: CronTaskWhereInput
  orderBy?: Array<CronTaskOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<CronTaskWhereUniqueInput>
}

export type QueryCronTaskArgs = {
  where: CronTaskWhereUniqueInput
}

export type QueryCronTasksCountArgs = {
  where?: CronTaskWhereInput
}

export type QueryCronLogsArgs = {
  where?: CronLogWhereInput
  orderBy?: Array<CronLogOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<CronLogWhereUniqueInput>
}

export type QueryCronLogArgs = {
  where: CronLogWhereUniqueInput
}

export type QueryCronLogsCountArgs = {
  where?: CronLogWhereInput
}

export type QueryNotificationTemplatesArgs = {
  where?: NotificationTemplateWhereInput
  orderBy?: Array<NotificationTemplateOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<NotificationTemplateWhereUniqueInput>
}

export type QueryNotificationTemplateArgs = {
  where: NotificationTemplateWhereUniqueInput
}

export type QueryNotificationTemplatesCountArgs = {
  where?: NotificationTemplateWhereInput
}

export type QueryNotificationsArgs = {
  where?: NotificationWhereInput
  orderBy?: Array<NotificationOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<NotificationWhereUniqueInput>
}

export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput
}

export type QueryNotificationsCountArgs = {
  where?: NotificationWhereInput
}

export type QueryTransactionsArgs = {
  where?: TransactionWhereInput
  orderBy?: Array<TransactionOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<TransactionWhereUniqueInput>
}

export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput
}

export type QueryTransactionsCountArgs = {
  where?: TransactionWhereInput
}

export type QuerySiteSettingsArgs = {
  where?: SiteSettingWhereInput
  orderBy?: Array<SiteSettingOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<SiteSettingWhereUniqueInput>
}

export type QuerySiteSettingArgs = {
  where?: SiteSettingWhereUniqueInput
}

export type QuerySiteSettingsCountArgs = {
  where?: SiteSettingWhereInput
}

export type QueryVerifyCodesArgs = {
  where?: VerifyCodeWhereInput
  orderBy?: Array<VerifyCodeOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<VerifyCodeWhereUniqueInput>
}

export type QueryVerifyCodeArgs = {
  where: VerifyCodeWhereUniqueInput
}

export type QueryVerifyCodesCountArgs = {
  where?: VerifyCodeWhereInput
}

export type QueryMenusArgs = {
  where?: MenuWhereInput
  orderBy?: Array<MenuOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<MenuWhereUniqueInput>
}

export type QueryMenuArgs = {
  where: MenuWhereUniqueInput
}

export type QueryMenusCountArgs = {
  where?: MenuWhereInput
}

export type QueryMenuItemsArgs = {
  where?: MenuItemWhereInput
  orderBy?: Array<MenuItemOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<MenuItemWhereUniqueInput>
}

export type QueryMenuItemArgs = {
  where: MenuItemWhereUniqueInput
}

export type QueryMenuItemsCountArgs = {
  where?: MenuItemWhereInput
}

export type QuerySystemsArgs = {
  where?: SystemWhereInput
  orderBy?: Array<SystemOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<SystemWhereUniqueInput>
}

export type QuerySystemArgs = {
  where?: SystemWhereUniqueInput
}

export type QuerySystemsCountArgs = {
  where?: SystemWhereInput
}

export type QueryPostsArgs = {
  where?: PostWhereInput
  orderBy?: Array<PostOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<PostWhereUniqueInput>
}

export type QueryPostArgs = {
  where: PostWhereUniqueInput
}

export type QueryPostsCountArgs = {
  where?: PostWhereInput
}

export type QueryFaQsArgs = {
  where?: FaqWhereInput
  orderBy?: Array<FaqOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<FaqWhereUniqueInput>
}

export type QueryFAqArgs = {
  where: FaqWhereUniqueInput
}

export type QueryFaQsCountArgs = {
  where?: FaqWhereInput
}

export type QueryDocumentTypesArgs = {
  where?: DocumentTypeWhereInput
  orderBy?: Array<DocumentTypeOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<DocumentTypeWhereUniqueInput>
}

export type QueryDocumentTypeArgs = {
  where: DocumentTypeWhereUniqueInput
}

export type QueryDocumentTypesCountArgs = {
  where?: DocumentTypeWhereInput
}

export type QueryPagesArgs = {
  where?: PageWhereInput
  orderBy?: Array<PageOrderByInput>
  take?: Maybe<Scalars["Int"]>
  skip?: Scalars["Int"]
  cursor?: Maybe<PageWhereUniqueInput>
}

export type QueryPageArgs = {
  where: PageWhereUniqueInput
}

export type QueryPagesCountArgs = {
  where?: PageWhereInput
}

export type QueryStatisticsArgs = {
  from: Scalars["String"]
  to: Scalars["String"]
}

export type QueryNotificationMesasageArgs = {
  id: Scalars["ID"]
}

export type QueryMeArgs = {
  silent?: Maybe<Scalars["Boolean"]>
  reToken?: Maybe<Scalars["Boolean"]>
}

export type AuthenticatedItem = User

export type KeystoneMeta = {
  __typename?: "KeystoneMeta"
  adminMeta: KeystoneAdminMeta
}

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta"
  lists: Array<KeystoneAdminUiListMeta>
  list?: Maybe<KeystoneAdminUiListMeta>
}

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"]
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta"
  key: Scalars["String"]
  itemQueryName: Scalars["String"]
  listQueryName: Scalars["String"]
  hideCreate: Scalars["Boolean"]
  hideDelete: Scalars["Boolean"]
  path: Scalars["String"]
  label: Scalars["String"]
  singular: Scalars["String"]
  plural: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  initialColumns: Array<Scalars["String"]>
  pageSize: Scalars["Int"]
  labelField: Scalars["String"]
  fields: Array<KeystoneAdminUiFieldMeta>
  groups: Array<KeystoneAdminUiFieldGroupMeta>
  initialSort?: Maybe<KeystoneAdminUiSort>
  isHidden: Scalars["Boolean"]
  isSingleton: Scalars["Boolean"]
}

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta"
  path: Scalars["String"]
  label: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  isOrderable: Scalars["Boolean"]
  isFilterable: Scalars["Boolean"]
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>
  fieldMeta?: Maybe<Scalars["JSON"]>
  viewsIndex: Scalars["Int"]
  customViewsIndex?: Maybe<Scalars["Int"]>
  createView: KeystoneAdminUiFieldMetaCreateView
  listView: KeystoneAdminUiFieldMetaListView
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>
  search?: Maybe<QueryMode>
}

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: Maybe<Scalars["ID"]>
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Read = "read",
  Create = "create",
  Update = "update"
}

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView"
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode
}

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden"
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView"
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode
}

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = "read",
  Hidden = "hidden"
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView"
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>
}

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Read = "read",
  Hidden = "hidden"
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = "form",
  Sidebar = "sidebar"
}

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: "KeystoneAdminUIFieldGroupMeta"
  label: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  fields: Array<KeystoneAdminUiFieldMeta>
}

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort"
  field: Scalars["String"]
  direction: KeystoneAdminUiSortDirection
}

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC"
}
