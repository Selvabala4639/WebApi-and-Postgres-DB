PGDMP              
        |            Library    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16648    Library    DATABASE     �   CREATE DATABASE "Library" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "Library";
                postgres    false            �            1259    16659    bookInfo    TABLE     �   CREATE TABLE public."bookInfo" (
    "BookID" integer NOT NULL,
    "BookName" character varying(250) NOT NULL,
    "AuthorName" character varying(250) NOT NULL,
    "BookCount" integer NOT NULL
);
    DROP TABLE public."bookInfo";
       public         heap    postgres    false            �            1259    16658    bookInfo_BookID_seq    SEQUENCE     �   CREATE SEQUENCE public."bookInfo_BookID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."bookInfo_BookID_seq";
       public          postgres    false    218            �           0    0    bookInfo_BookID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."bookInfo_BookID_seq" OWNED BY public."bookInfo"."BookID";
          public          postgres    false    217            �            1259    16675 
   borrowInfo    TABLE     '  CREATE TABLE public."borrowInfo" (
    "BorrowID" integer NOT NULL,
    "BookID" integer NOT NULL,
    "UserID" integer NOT NULL,
    "BorrowDate" date NOT NULL,
    "BorrowBookCount" integer NOT NULL,
    "Status" character varying(250) NOT NULL,
    "PaidFineAmount" numeric(10,2) NOT NULL
);
     DROP TABLE public."borrowInfo";
       public         heap    postgres    false            �            1259    16674    borrowInfo_BorrowID_seq    SEQUENCE     �   CREATE SEQUENCE public."borrowInfo_BorrowID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."borrowInfo_BorrowID_seq";
       public          postgres    false    220            �           0    0    borrowInfo_BorrowID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."borrowInfo_BorrowID_seq" OWNED BY public."borrowInfo"."BorrowID";
          public          postgres    false    219            �            1259    16650    userInfo    TABLE     �  CREATE TABLE public."userInfo" (
    "UserID" integer NOT NULL,
    "UserName" character varying(250) NOT NULL,
    "Gender" character varying(250) NOT NULL,
    "Department" character varying(250) NOT NULL,
    "MobileNumber" character varying(250) NOT NULL,
    "MailID" character varying(250) NOT NULL,
    "WalletBalance" numeric(10,2) NOT NULL,
    "Password" character varying(250) NOT NULL
);
    DROP TABLE public."userInfo";
       public         heap    postgres    false            �            1259    16649    userInfo_UserID_seq    SEQUENCE     �   CREATE SEQUENCE public."userInfo_UserID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."userInfo_UserID_seq";
       public          postgres    false    216                        0    0    userInfo_UserID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."userInfo_UserID_seq" OWNED BY public."userInfo"."UserID";
          public          postgres    false    215            [           2604    16662    bookInfo BookID    DEFAULT     x   ALTER TABLE ONLY public."bookInfo" ALTER COLUMN "BookID" SET DEFAULT nextval('public."bookInfo_BookID_seq"'::regclass);
 B   ALTER TABLE public."bookInfo" ALTER COLUMN "BookID" DROP DEFAULT;
       public          postgres    false    217    218    218            \           2604    16678    borrowInfo BorrowID    DEFAULT     �   ALTER TABLE ONLY public."borrowInfo" ALTER COLUMN "BorrowID" SET DEFAULT nextval('public."borrowInfo_BorrowID_seq"'::regclass);
 F   ALTER TABLE public."borrowInfo" ALTER COLUMN "BorrowID" DROP DEFAULT;
       public          postgres    false    220    219    220            Z           2604    16653    userInfo UserID    DEFAULT     x   ALTER TABLE ONLY public."userInfo" ALTER COLUMN "UserID" SET DEFAULT nextval('public."userInfo_UserID_seq"'::regclass);
 B   ALTER TABLE public."userInfo" ALTER COLUMN "UserID" DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16659    bookInfo 
   TABLE DATA           U   COPY public."bookInfo" ("BookID", "BookName", "AuthorName", "BookCount") FROM stdin;
    public          postgres    false    218          �          0    16675 
   borrowInfo 
   TABLE DATA           �   COPY public."borrowInfo" ("BorrowID", "BookID", "UserID", "BorrowDate", "BorrowBookCount", "Status", "PaidFineAmount") FROM stdin;
    public          postgres    false    220   \       �          0    16650    userInfo 
   TABLE DATA           �   COPY public."userInfo" ("UserID", "UserName", "Gender", "Department", "MobileNumber", "MailID", "WalletBalance", "Password") FROM stdin;
    public          postgres    false    216   �                  0    0    bookInfo_BookID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."bookInfo_BookID_seq"', 5, true);
          public          postgres    false    217                       0    0    borrowInfo_BorrowID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."borrowInfo_BorrowID_seq"', 16, true);
          public          postgres    false    219                       0    0    userInfo_UserID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."userInfo_UserID_seq"', 3, true);
          public          postgres    false    215            `           2606    16666    bookInfo bookInfo_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."bookInfo"
    ADD CONSTRAINT "bookInfo_pkey" PRIMARY KEY ("BookID");
 D   ALTER TABLE ONLY public."bookInfo" DROP CONSTRAINT "bookInfo_pkey";
       public            postgres    false    218            b           2606    16680    borrowInfo borrowInfo_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."borrowInfo"
    ADD CONSTRAINT "borrowInfo_pkey" PRIMARY KEY ("BorrowID");
 H   ALTER TABLE ONLY public."borrowInfo" DROP CONSTRAINT "borrowInfo_pkey";
       public            postgres    false    220            ^           2606    16657    userInfo userInfo_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."userInfo"
    ADD CONSTRAINT "userInfo_pkey" PRIMARY KEY ("UserID");
 D   ALTER TABLE ONLY public."userInfo" DROP CONSTRAINT "userInfo_pkey";
       public            postgres    false    216            �   F   x�3�tV�t,-��/2�4�2�����
q�r�pzC�
&�F\��!pS��1�s0\Đ�Ќ+F��� �X      �   �   x���1
�0�پK��d;��#d�ج��^�6%M#C�&���u�8��\�R��zs4yv�B]� ���견�g��s;���+�@���+4V`E�MA֧P��>#�"�[rߒ�|��B"�����7J�rs      �   x   x�Uα
�0E���c�쐔l.�c��Yd���M�@���ڡ�.�1k9$ILR����C?ކ!�g���옿'u�c�K�	�����Vي��
C�6��Q��Li���*��zs�������-�     