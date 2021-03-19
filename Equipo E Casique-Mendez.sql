-- ** Auditoria de Datos - Hist�rico de Manipulaci�n de Datos **

--	DROP TABLE T99999T_Auditoria;

CREATE TABLE            	T99999_Auditoria (
	Co_Auditoria     		bigint unsigned NOT NULL Auto_Increment,
	Nb_Tabla				char(255)		NOT NULL,
	Co_Fila					bigint unsigned NULL,
	Co_Tipo_Operacion		varchar(10)		NOT NULL,
	Tx_Sentencia			varchar(5000)	NOT NULL,
	Tx_Error				varchar(5000)	NULL,
	Co_Auditoria_Auditoria  bigint unsigned NULL,
	Co_Usuario				bigint unsigned NOT NULL,
	Co_MAC					char			NULL,
	Co_IP					char(40)		NULL,
	Fe_Ins      	    	datetime        NOT NULL	DEFAULT CURRENT_TIMESTAMP,
	St_Error				boolean			NOT NULL	DEFAULT 0,
	CONSTRAINT          	PK_T99999_Auditoria          	PRIMARY KEY (Co_Auditoria),
	CONSTRAINT				FK_Auditoria_Auditoria			FOREIGN KEY (Co_Auditoria_Auditoria)	REFERENCES T99999_Auditoria (Co_Auditoria),
	CONSTRAINT				CHK_Auditoria_Tipo_Operacion 	CHECK ((Co_Tipo_Operacion='INS') or (Co_Tipo_Operacion='UPD') or (Co_Tipo_Operacion='DEL') or (Co_Tipo_Operacion='ACTIVE') or (Co_Tipo_Operacion='INACTIVE'))
);

-- ** Usuarios **

--	DROP TABLE T00000M_Usuario;

CREATE TABLE            T00100_Usuario (
	Co_Usuario     		bigint unsigned NOT NULL Auto_Increment,
	Nb_Usuario			char(100)		NOT NULL,
	Tx_Email			varchar(500)	NOT NULL,
	Nu_Movil			char(20)		NULL,
	Tx_Clave			char(100)		NOT NULL,
	Tx_Patron			char(20)		NULL,
	Nu_Intentos			int				NOT NULL	default 0,
	Fe_Recuperacion		datetime        NULL,
	St_Bloqueo			boolean			NULL		default 0,
	St_Activo           boolean         NOT NULL 	default 1,
	Co_Auditoria		bigint unsigned NULL,
	CONSTRAINT          PK_Usuario  			PRIMARY KEY (Co_Usuario),
	CONSTRAINT			Uk_Usuario_Nb_Usuario 	UNIQUE (Nb_Usuario),
	CONSTRAINT			Uk_Usuario_Tx_Email 	UNIQUE (Tx_Email),
	CONSTRAINT			FK_Usuario_Auditoria	FOREIGN KEY (Co_Auditoria)  REFERENCES T99999_Auditoria (Co_Auditoria)
);

CREATE TABLE            T99999_Bitacora (
	Co_Bitacora	    		bigint unsigned NOT NULL Auto_Increment,
	Co_Bitacora_Previo		bigint unsigned NOT NULL,
	Co_Usuario				bigint unsigned NOT NULL,
	Fe_Ins					datetime        NOT NULL	DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT          PK_Bitacora         			PRIMARY KEY (Co_Bitacora),
	CONSTRAINT			FK_Bitacora_Bitacora			FOREIGN KEY (Co_Bitacora_Previo)	REFERENCES T99999_Bitacora (Co_Bitacora),
	CONSTRAINT			FK_Bitacora_Usuario				FOREIGN KEY (Co_Usuario)  			REFERENCES T00100_Usuario (Co_Usuario)
);


--	DROP TABLE T00000M_Empresa;

CREATE TABLE            T00130_Empresa (
	Co_Empresa						bigint unsigned NOT NULL Auto_Increment,
	Nb_Empresa						varchar(2500)   NOT NULL,
	Nu_Registro						varchar(50)		NULL,
	Tx_Direccion					varchar(250)	NULL,
	Nu_Latitud						numeric(12,6)	NULL,
	Nu_Longitud						numeric(12,6)	NULL,
	Nu_Movil						varchar(20)		NULL,
	Nu_Telefono						varchar(20)   	NULL,
	Tx_Email						varchar(250)	NULL,
	Co_Pais							int				NULL,
	St_Rama							boolean         NOT NULL default 1,
	St_Activo           			boolean         NOT NULL default 1,
	Co_Auditoria					bigint unsigned NULL,
	CONSTRAINT      PK_Empresa      PRIMARY KEY (Co_Empresa),
	CONSTRAINT		FK_Empresa_Auditoria				FOREIGN KEY (Co_Auditoria)  REFERENCES T99999_Auditoria (Co_Auditoria)
);

--	DROP TABLE T00000M_Organizacion;

CREATE TABLE            T00150_Organizacion (
	Co_Organizacion						bigint unsigned NOT NULL Auto_Increment,
	Nb_Organizacion						varchar(2500)   NOT NULL,
	Co_Organizacion_Organizacion		bigint unsigned NOT NULL,
	Co_Empresa							bigint unsigned NOT NULL,
	Nu_Telefono							varchar(50)   	NULL,
	Tx_Email							char(40)		NULL,
	St_Rama								boolean         NOT NULL default 1,
	St_Activo           				boolean         NOT NULL default 1,
	Co_Auditoria						bigint unsigned NULL,
	CONSTRAINT          PK_Organizacion         			PRIMARY KEY (Co_Organizacion),
	CONSTRAINT 			FK_Organizacion_Organizacion 		FOREIGN KEY (Co_Organizacion_Organizacion)	REFERENCES T00150_Organizacion (Co_Organizacion),
	CONSTRAINT 			FK_Organizacion_Empresa			 	FOREIGN KEY (Co_Empresa) 					REFERENCES T00130_Empresa (Co_Empresa),
	CONSTRAINT			FK_Organizacion_Auditoria			FOREIGN KEY (Co_Auditoria)  				REFERENCES T99999_Auditoria (Co_Auditoria)
);
