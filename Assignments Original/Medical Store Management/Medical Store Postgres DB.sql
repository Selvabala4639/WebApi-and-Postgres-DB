PGDMP              
        |            MedicalStore    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16568    MedicalStore    DATABASE     �   CREATE DATABASE "MedicalStore" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "MedicalStore";
                postgres    false            �            1259    16595    medicineInfo    TABLE     �   CREATE TABLE public."medicineInfo" (
    "MedicineID" integer NOT NULL,
    "MedicineName" character varying(250) NOT NULL,
    "MedicinePrice" numeric(10,2) NOT NULL,
    "MedicineQuantity" integer NOT NULL,
    "MedicineExpireDate" date NOT NULL
);
 "   DROP TABLE public."medicineInfo";
       public         heap    postgres    false            �            1259    16594    medicineInfo_MedicineID_seq    SEQUENCE     �   CREATE SEQUENCE public."medicineInfo_MedicineID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."medicineInfo_MedicineID_seq";
       public          postgres    false    218            �           0    0    medicineInfo_MedicineID_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."medicineInfo_MedicineID_seq" OWNED BY public."medicineInfo"."MedicineID";
          public          postgres    false    217            �            1259    16586 	   orderInfo    TABLE     \  CREATE TABLE public."orderInfo" (
    "OrderID" integer NOT NULL,
    "MedicineID" integer NOT NULL,
    "UserID" integer NOT NULL,
    "MedicineName" character varying(250) NOT NULL,
    "Quantity" numeric(10,2) NOT NULL,
    "OrderDate" date NOT NULL,
    "TotalPrice" numeric(10,2) NOT NULL,
    "OrderStatus" character varying(250) NOT NULL
);
    DROP TABLE public."orderInfo";
       public         heap    postgres    false            �            1259    16585    orderInfo_OrderID_seq    SEQUENCE     �   CREATE SEQUENCE public."orderInfo_OrderID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."orderInfo_OrderID_seq";
       public          postgres    false    216            �           0    0    orderInfo_OrderID_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."orderInfo_OrderID_seq" OWNED BY public."orderInfo"."OrderID";
          public          postgres    false    215            �            1259    16602    userInfo    TABLE     2  CREATE TABLE public."userInfo" (
    "UserID" integer NOT NULL,
    "UserName" character varying(250) NOT NULL,
    "UserEmail" character varying(250) NOT NULL,
    "UserPassword" character varying(250) NOT NULL,
    "UserPhone" character varying(250) NOT NULL,
    "UserBalance" numeric(10,2) NOT NULL
);
    DROP TABLE public."userInfo";
       public         heap    postgres    false            �            1259    16601    userInfo_UserID_seq    SEQUENCE     �   CREATE SEQUENCE public."userInfo_UserID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."userInfo_UserID_seq";
       public          postgres    false    220                        0    0    userInfo_UserID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."userInfo_UserID_seq" OWNED BY public."userInfo"."UserID";
          public          postgres    false    219            [           2604    16598    medicineInfo MedicineID    DEFAULT     �   ALTER TABLE ONLY public."medicineInfo" ALTER COLUMN "MedicineID" SET DEFAULT nextval('public."medicineInfo_MedicineID_seq"'::regclass);
 J   ALTER TABLE public."medicineInfo" ALTER COLUMN "MedicineID" DROP DEFAULT;
       public          postgres    false    217    218    218            Z           2604    16589    orderInfo OrderID    DEFAULT     |   ALTER TABLE ONLY public."orderInfo" ALTER COLUMN "OrderID" SET DEFAULT nextval('public."orderInfo_OrderID_seq"'::regclass);
 D   ALTER TABLE public."orderInfo" ALTER COLUMN "OrderID" DROP DEFAULT;
       public          postgres    false    215    216    216            \           2604    16605    userInfo UserID    DEFAULT     x   ALTER TABLE ONLY public."userInfo" ALTER COLUMN "UserID" SET DEFAULT nextval('public."userInfo_UserID_seq"'::regclass);
 B   ALTER TABLE public."userInfo" ALTER COLUMN "UserID" DROP DEFAULT;
       public          postgres    false    220    219    220            �          0    16595    medicineInfo 
   TABLE DATA           �   COPY public."medicineInfo" ("MedicineID", "MedicineName", "MedicinePrice", "MedicineQuantity", "MedicineExpireDate") FROM stdin;
    public          postgres    false    218   �       �          0    16586 	   orderInfo 
   TABLE DATA           �   COPY public."orderInfo" ("OrderID", "MedicineID", "UserID", "MedicineName", "Quantity", "OrderDate", "TotalPrice", "OrderStatus") FROM stdin;
    public          postgres    false    216   �       �          0    16602    userInfo 
   TABLE DATA           s   COPY public."userInfo" ("UserID", "UserName", "UserEmail", "UserPassword", "UserPhone", "UserBalance") FROM stdin;
    public          postgres    false    220   k                  0    0    medicineInfo_MedicineID_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."medicineInfo_MedicineID_seq"', 2, true);
          public          postgres    false    217                       0    0    orderInfo_OrderID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."orderInfo_OrderID_seq"', 4, true);
          public          postgres    false    215                       0    0    userInfo_UserID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."userInfo_UserID_seq"', 2, true);
          public          postgres    false    219            `           2606    16600    medicineInfo medicineInfo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."medicineInfo"
    ADD CONSTRAINT "medicineInfo_pkey" PRIMARY KEY ("MedicineID");
 L   ALTER TABLE ONLY public."medicineInfo" DROP CONSTRAINT "medicineInfo_pkey";
       public            postgres    false    218            ^           2606    16593    orderInfo orderInfo_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public."orderInfo"
    ADD CONSTRAINT "orderInfo_pkey" PRIMARY KEY ("OrderID");
 F   ALTER TABLE ONLY public."orderInfo" DROP CONSTRAINT "orderInfo_pkey";
       public            postgres    false    216            b           2606    16609    userInfo userInfo_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."userInfo"
    ADD CONSTRAINT "userInfo_pkey" PRIMARY KEY ("UserID");
 D   ALTER TABLE ONLY public."userInfo" DROP CONSTRAINT "userInfo_pkey";
       public            postgres    false    220            �   9   x�3�L�,����42�30 �`��D����9��S9�@��P)S]#c�=... ���      �   f   x�3�4Ģ��Ԓ���N#=N##]S]3 $����������e�Q ց���G�5��N�,�lh���dd���_��ZT���� a�+�      �   M   x�3�LJ�I鹉�9z����N ���1���������������!gpjNY"g1�D� E�aija����� !�y     