/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2023/2/2 17:24:21                            */
/*==============================================================*/


drop table if exists activity;

drop table if exists activityComment;

drop table if exists activity_type;

drop table if exists admins;

drop table if exists index_notice;

drop table if exists index_rotain_chart;

drop table if exists message_board;

drop table if exists message_board_admin;

drop table if exists service_join_list;

drop table if exists users;

drop table if exists volunteer_consult_comment;

drop table if exists volunteer_consult_list;

/*==============================================================*/
/* Table: activity                                              */
/*==============================================================*/
create table activity
(
   activitty_code       varchar(15) not null,
   activity_type_id     int,
   activity_name        varchar(20) not null,
   activity_img         varchar(255) not null,
   activity_time        date not null,
   activity_count_all   int not null,
   introduce            varchar(4096),
   contact              varchar(20) not null,
   contact_telephone    varchar(12),
   last_click_time      timestamp default CURRENT_TIMESTAMP,
   click_count          int default 0,
   activity_id          int not null auto_increment,
   activity_count_rest  int not null,
   primary key (activity_id)
);

/*==============================================================*/
/* Table: activityComment                                       */
/*==============================================================*/
create table activityComment
(
   activity_comment_id  int not null auto_increment,
   activity_id          int,
   user_id              int,
   activity_comment_content varchar(1500) not null,
   primary key (activity_comment_id)
);

/*==============================================================*/
/* Table: activity_type                                         */
/*==============================================================*/
create table activity_type
(
   activity_type_id     int not null auto_increment,
   acitivity_type_name  varchar(20) not null,
   primary key (activity_type_id)
);

/*==============================================================*/
/* Table: admins                                                */
/*==============================================================*/
create table admins
(
   admin_id             int not null auto_increment,
   admin_name           varchar(20) not null,
   admin_password       varchar(20) not null,
   primary key (admin_id)
);

/*==============================================================*/
/* Table: index_notice                                          */
/*==============================================================*/
create table index_notice
(
   index_notice_id      int not null auto_increment,
   index_notice_title   varchar(30) not null,
   index_notice_img     varchar(255) not null,
   index_notice_time    date not null,
   primary key (index_notice_id)
);

/*==============================================================*/
/* Table: index_rotain_chart                                    */
/*==============================================================*/
create table index_rotain_chart
(
   picture_id           int not null auto_increment,
   picture_name         varchar(20) not null,
   picture_value        varchar(255) not null,
   primary key (picture_id)
);

/*==============================================================*/
/* Table: message_board                                         */
/*==============================================================*/
create table message_board
(
   message_board_id     int not null auto_increment,
   user_id              int,
   message_board_content varchar(2000) not null,
   time                 timestamp default CURRENT_TIMESTAMP,
   primary key (message_board_id)
);

/*==============================================================*/
/* Table: message_board_admin                                   */
/*==============================================================*/
create table message_board_admin
(
   message_board_id     int not null auto_increment,
   message_board_content varchar(2000) not null,
   admin_id             int,
   time                 timestamp default CURRENT_TIMESTAMP,
   primary key (message_board_id)
);

/*==============================================================*/
/* Table: service_join_list                                     */
/*==============================================================*/
create table service_join_list
(
   service_join_list_id int not null auto_increment,
   activity_id          int,
   user_id              int,
   service_time         double not null,
   telephone            varchar(20) not null,
   register_time        date not null,
   is_exam              int not null default 0,
   is_sign              int not null default 0,
   primary key (service_join_list_id)
);

/*==============================================================*/
/* Table: users                                                 */
/*==============================================================*/
create table users
(
   user_id              int not null auto_increment,
   password             varchar(20) not null,
   username             varchar(20) not null,
   identity_num         varchar(20),
   image                varchar(255),
   server_time          double default 0,
   sex                  varchar(2) default '男',
   telephone            varchar(20) not null,
   email                varchar(20) not null,
   name                 varchar(20),
   primary key (user_id)
);

/*==============================================================*/
/* Table: volunteer_consult_comment                             */
/*==============================================================*/
create table volunteer_consult_comment
(
   volunteer_consult_comment_id int not null auto_increment,
   volunteer_consult_list_id int,
   user_id              integer not null,
   volunteer_consult_comment_content varchar(2000) not null,
   primary key (volunteer_consult_comment_id)
);

/*==============================================================*/
/* Table: volunteer_consult_list                                */
/*==============================================================*/
create table volunteer_consult_list
(
   volunteer_consult_list_id int not null auto_increment,
   volunteer_consult_list_title varchar(20) not null,
   volunteer_consult_list_img varchar(255) not null,
   volunteer_consult_list_content varchar(2000),
   volunteer_consult_list_time date not null,
   primary key (volunteer_consult_list_id)
);

alter table activity add constraint FK_activity_type foreign key (activity_type_id)
      references activity_type (activity_type_id) on delete restrict on update restrict;

alter table activityComment add constraint FK_Reference_7 foreign key (activity_id)
      references activity (activity_id) on delete restrict on update restrict;

alter table activityComment add constraint FK_Reference_8 foreign key (user_id)
      references users (user_id) on delete restrict on update restrict;

alter table message_board add constraint FK_Reference_4 foreign key (user_id)
      references users (user_id) on delete restrict on update restrict;

alter table message_board_admin add constraint FK_Reference_5 foreign key (admin_id)
      references admins (admin_id) on delete restrict on update restrict;

alter table service_join_list add constraint FK_activity_code foreign key (activity_id)
      references activity (activity_id) on delete restrict on update restrict;

alter table service_join_list add constraint FK_user_id foreign key (user_id)
      references users (user_id) on delete restrict on update restrict;

alter table volunteer_consult_comment add constraint FK_Reference_6 foreign key (volunteer_consult_list_id)
      references volunteer_consult_list (volunteer_consult_list_id) on delete restrict on update restrict;

