package org.rvermorel.tools;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.rvermorel.cbd.domain.Contact;

import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

public class DataAdapterAssos {
//	public static JRBeanCollectionDataSource<Contact> getAssos(){
//		
//		List<Contact> list = new ArrayList<Contact>();
//		Contact c1 = new Contact();
//		c1.setAssoName("Boule Sarriannaise");
//		list.add(c1);
//		
//		return new JRBeanCollectionDataSource(list);
//		
//	
//	}
	
	/**
	 *
	 */
	private static Contact[] data =
		{
		
		};  
			

	/**
	 *
	 */
	public static Object[] getBeanArray()
	{
		return data;
	}


	/**
	 *
	 */
	public static Collection<Contact> getBeanCollection()
	{
		return Arrays.asList(data);
	}
}
